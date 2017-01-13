class Api::TeamsController < ApplicationController
  def index
    @teams = current_user.teams.includes(:members, :owner)
    render :index
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      render json: @team
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
