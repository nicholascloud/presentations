class IISPath
  TaskName = :iispath
  include Albacore::Task
  include Albacore::RunCommand

  attr_accessor :site, :physical_path

  def execute
    command_parameters = []
    command_parameters << 'set'
    command_parameters << 'vdir'
    command_parameters << "\"#{site}/\""
    command_parameters << "-physicalPath:\"#{physical_path}\""

    result = run_command "AppCmd.exe", command_parameters.join(' ')

    failure_message = "Could not change the virtual directory"
    fail_with_message failure_message if !result

    puts physical_path
  end
end

namespace :iis do

  desc 'Updates the IIS site path to /Publish/[version]'
  iispath :update do |i|
    version = GrokMob::current_version()
    i.command = "appcmd"
    i.site = "grokmob.localhost.com"
    i.physical_path = File.expand_path("./Publish/#{version}").gsub('/', '\\')
  end
end