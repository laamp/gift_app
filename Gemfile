# frozen_string_literal: true

source 'https://rubygems.org'

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '>= 3.1.0'

gem 'bcrypt'
gem 'bootsnap', require: false
gem 'jwt'
gem 'pg', '~> 1.1'
gem 'puma', '~> 5.0'
gem 'rails', '~> 7.0.3'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

group :development, :test do
  gem 'brakeman'
  gem 'bundler-audit'
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  gem 'dotenv-rails'
  gem 'rubocop-rails'
end

group :development do
  gem 'annotate'
  gem 'rubocop'
  gem 'solargraph'
end

group :test do
  gem 'factory_bot_rails'
end
