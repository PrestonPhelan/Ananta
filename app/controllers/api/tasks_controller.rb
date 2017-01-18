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
    puts "#{@task}"
    if @task.update(name: params[:task][:name])
      puts "@TASK AFTER UPDATE"
      puts "#{@task}"
      render :create
    else
      puts "UPDATE DID NOT WORK"
      render json: @task.errors.full_messages, status: 422
    end
  end

  private

  def task_params
    params.require(:task).permit(:project_id, :name, :creator_id)
  end
end
