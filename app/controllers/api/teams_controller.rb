class Api::TeamsController < ApplicationController
  def index
    @teams = current_user.teams.includes(:members, :owner)
    render :index
  end

  def create
    team = Team.new(team_params)
    @members = params[:team][:membersToAdd]
    # owner = current_user
    if team.save
      @members.each do |member|
        Membership.create(user_id: member, team_id: team.id)
      end
      @team = Team.includes(:members, :owner).find_by_id(team.id)
      render :show
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
