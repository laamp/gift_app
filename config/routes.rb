# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users, only: %i[create update destroy]
  post 'auth/login', to: 'authentication#login'
end
