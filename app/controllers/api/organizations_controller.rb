class Api::OrganizationsController < ApplicationController
  def create
    @organization = Organization.new(organization_params)
    if @organization.save
      render json: ["Successful organization save!"]
    else
      render json: @organization.errors.full_messages, status: 422
    end
  end

  private

  def organization_params
    params.require(:organization)
      .permit(:name, :image_url, :owner_id)
  end
end
