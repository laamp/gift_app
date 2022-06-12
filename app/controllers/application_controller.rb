# frozen_string_literal: true

class ApplicationController < ActionController::API
  def hello_world
    render json: { hello: 'world' }, status: :ok
  end
end
