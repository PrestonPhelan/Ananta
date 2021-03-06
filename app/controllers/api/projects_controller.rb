class Api::ProjectsController < ApplicationController
  def index
    @projects = Team.includes(:projects).find(params[:team_id]).projects
    render :index
  end

  def show
    @project = Project.includes(tasks: :assignee).find_by_id(params[:id])
    if params[:filtered]
      render :filtered_show
    else
      render :show
    end
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render :create
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  private

  def project_params
    params.require(:project).permit(:team_id, :name)
  end
end
