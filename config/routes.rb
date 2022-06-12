# frozen_string_literal: true

Rails.application.routes.draw do
  get '/hello_world', to: 'application#hello_world'
end
