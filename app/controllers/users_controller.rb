# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :authorize_request, except: :create
  before_action :find_user, except: %i[create]

  def create
    @user = User.new(user_params)
    if @user.save
      render json: { success: true, data: @user }, status: :ok
    else
      render json: { success: false, errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: { success: true, data: @user }, status: :ok
    else
      render json: { success: false, errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private

  def find_user
    @user = User.find_by_email!(user_params[:email])
  rescue ActiveRecord::RecordNotFound
    render json: { success: false, errors: 'User not found' }, status: :not_found
  end

  def user_params
    params.require(:user).permit(
      :avatar, :name, :email, :password, :password_confirmation
    )
  end
end
