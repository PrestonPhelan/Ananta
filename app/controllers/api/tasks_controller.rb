class Api::TasksController < ApplicationController
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
    puts "INSTANCE VARIABLE @TASK BEFORE UPDATE"
    puts "#{@task.name} Completed: #{@task.completed}"
    if @task.update_attributes(task_params)
      puts "@TASK AFTER UPDATE"
      puts "#{@task.name} Completed: #{@task.completed}"
      render :create
    else
      puts "UPDATE DID NOT WORK"
      render json: @task.errors.full_messages, status: 422
    end
  end

  private

  def task_params
    params.require(:task).permit(:project_id, :name, :creator_id, :completed, :assignee_id)
  end
end
