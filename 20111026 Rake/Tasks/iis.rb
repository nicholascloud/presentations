class IISPath
  include Albacore::Task
  include Albacore::RunCommand

  attr_accessor :site, :physical_path

  def execute
    run_command "IIS AppCmd", "set vdir \"#{site}/\" -physicalPath:\"#{physical_path}\""
  end
end

namespace :iis do

  desc 'Updates the IIS site path to /Publish/[version]'
  iispath :update do |i|
    version = GrokMob::current_version()
    i.command = "appcmd"
    i.site = "grokmob"
    i.physical_path = File.expand_path("./Publish/#{version}")
  end
end