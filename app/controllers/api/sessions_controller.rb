class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render root
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render root
    else
      render json: ["Nobody logged in"], status: 404
    end
  end
end
