require 'rubygems'
require 'sinatra'
require 'liquid'

get '/' do
  liquid :index
end

get '/about' do
  liquid :about
end