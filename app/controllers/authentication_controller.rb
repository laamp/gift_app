# frozen_string_literal: true

class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  def login
    @user = User.find_by_email(login_params[:email])

    if @user&.authenticate(login_params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i

      response_data = {
        token:,
        exp: time.strftime('%m-%d-%Y %H:%M'),
        email: @user.email
      }

      render json: { success: true, data: response_data }, status: :ok
    else
      render json: { success: false, errors: 'unauthorized' }, status: :unauthorized
    end
  end

  private

  def login_params
    params.require(:login).permit(:email, :password)
  end
end
