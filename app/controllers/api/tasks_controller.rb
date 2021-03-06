class Api::TasksController < ApplicationController
  def index
    if params[:type] == "USER"
      @tasks = Team.includes(:tasks).find(params[:team_id]).tasks.where(assignee_id: current_user.id)
      render :user_index
    elsif params[:type] == "UNASSIGNED"
      @tasks = Team.includes(:tasks).find(params[:team_id]).tasks.where(assignee_id: nil)
      render :unassigned_index
    elsif params[:type] == "USER-FILTERED"
      @tasks = Team.includes(:tasks).find(params[:team_id]).tasks.where(assignee_id: current_user.id)
      render :user_filtered_index
    elsif params[:type] == "UNASSIGNED-FILTERED"
      @tasks = Team.includes(:tasks).find(params[:team_id]).tasks.where(assignee_id: nil)
      render :unassigned_filtered_index
    else
      render json: ["Error in index routing"]
    end
  end

  def show
    @task = Task.includes(:assignee).find(params[:id])
    render :show
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render :create
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update_attributes(task_params)
      render :create
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render :show
  end

  private

  def task_params
    params.require(:task).permit(:project_id, :name, :creator_id, :completed, :assignee_id, :description, :order)
  end
end
