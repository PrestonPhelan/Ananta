class Api::UsersController < ApplicationController
  def create
    @user = User.new(sign_up_params)

    if @user.save
      login(@user)
      render root
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  private

  def sign_up_params
    params.require(:user).permit(:username, :email, :password)
  end
end
