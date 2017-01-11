class Api::UsersController < ApplicationController
  def create
    if params[:user][:password] == params[:user][:confirm_password]
      @user = User.new(sign_up_params)


      if @user.save
        login(@user)
        render json: ["Successful sign up"]
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: ["Passwords don't match"], status: 422
    end
  end

  private

  def sign_up_params
    params.require(:user)
      .permit(:username, :email, :password)
  end
end
