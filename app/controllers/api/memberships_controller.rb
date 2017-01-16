class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      @user = User.new(user_params)
      render 'api/users/show'
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  private

  def membership_params
    params.require(:membership)
      .permit(:team_id, :user_id)
  end

  def user_params
    params.require(:membership).require(:member)
      .permit(:id, :image_url)
  end
end
