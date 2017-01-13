class Api::TeamsController < ApplicationController
  def create
    @team = Team.new(team_params)
    if @team.save
      render json: ["Successful team save!"]
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  private

  def team_params
    params.require(:team)
      .permit(:name, :owner_id, :organization_id)
  end
end
