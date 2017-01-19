class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :detail
  end

  def create
    if params[:user][:password] == params[:user][:confirm_password]
      @user = User.new(sign_up_params)
      if @user.save
        login(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: ["Passwords don't match"], status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :detail
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def sign_up_params
    params.require(:user)
      .permit(:username, :email, :password, :image_url)
  end

  def user_params
    params.require(:user)
      .permit(:username, :role, :department, :about, :image_url, :email)
  end
end
