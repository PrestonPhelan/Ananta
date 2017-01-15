class Api::TeamsController < ApplicationController
  def index
    @teams = current_user.teams.includes(:members, :owner)
    render :index
  end

  def show
    @team = Team.includes(:members, :projects).find_by_id(params[:id])
    render :show
  end

  def create
    team = Team.new(team_params)
    # owner = current_user
    if team.save
      @members = params[:team][:membersToAdd]
      @members.each do |member|
        Membership.create(user_id: member, team_id: team.id)
      end
      @team = Team.includes(:members, :owner).find_by_id(team.id)
      render :create
    else
      render json: team.errors.full_messages, status: 422
    end
  end

  private

  def team_params
    params.require(:team)
      .permit(:name, :owner_id, :organization_id)
  end
end
