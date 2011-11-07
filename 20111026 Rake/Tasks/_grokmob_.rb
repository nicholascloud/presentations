class GrokMob
  VERSION_FILE = './GrokMob/Common/version'

  def self.current_version()
    if !File.exists? (VERSION_FILE) then
      File.open(VERSION_FILE, 'w') { |f| f.write('0.0.0.0') }
    end
    File.open(VERSION_FILE, 'r') do |f|
      return f.gets.strip()
    end
  end

end