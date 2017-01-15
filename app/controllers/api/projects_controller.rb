class Api::ProjectsController < ApplicationController
  def index
    @projects = Team.includes(:projects).find(params[:team_id]).projects
    render :index
  end

  def create

  end
end
