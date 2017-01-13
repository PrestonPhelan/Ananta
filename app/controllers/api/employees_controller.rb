class Api::EmployeesController < ApplicationController
  def create
    @employee = Employee.new(employee_params)
    if @employee.save
      render json: ["Successful employee save!"]
    else
      render json: @employee.errors.full_messages, status: 422
    end
  end

  private

  def employee_params
    params.require(:employee)
      .permit(:organization_id, :user_id)
  end
end
