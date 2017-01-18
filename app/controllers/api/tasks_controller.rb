class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
    if @task.save
      render :create
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  private

  def task_params
    params.require(:task).permit(:project_id, :name, :creator_id)
  end
end
