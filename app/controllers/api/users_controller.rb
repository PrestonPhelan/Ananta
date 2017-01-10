class Api::UsersController < ApplicationController
  def create
    @user = User.new(sign_up_params)

    debugger
    if @user.save
      login(@user)
      render json: ["Successful sign up"]
    else
      if @user
        render json: @user.errors.full_messages, status: 422
      else
        render json: ["No instance variable user"], status: 422
      end
    end
  end

  private

  def sign_up_params
    params.require(:user).permit(:username, :email, :password)
  end
end
