class EmployeesController < ApplicationController
  before_action :set_employee, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  # GET /employees
  def index
    @employees = Employee.all
    render inertia: "Employee/Index", props: {
      employees: @employees.map do |employee|
        serialize_employee(employee)
      end
    }
  end

  # GET /employees/1
  def show
    render inertia: "Employee/Show", props: {
      employee: serialize_employee(@employee)
    }
  end

  # GET /employees/new
  def new
    @employee = Employee.new
    render inertia: "Employee/New", props: {
      employee: serialize_employee(@employee)
    }
  end

  # GET /employees/1/edit
  def edit
    render inertia: "Employee/Edit", props: {
      employee: serialize_employee(@employee)
    }
  end

  # POST /employees
  def create
    @employee = Employee.new(employee_params)

    if @employee.save
      redirect_to @employee, notice: "Employee was successfully created."
    else
      redirect_to new_employee_url, inertia: { errors: @employee.errors }
    end
  end

  # PATCH/PUT /employees/1
  def update
    if @employee.update(employee_params)
      redirect_to @employee, notice: "Employee was successfully updated."
    else
      redirect_to edit_employee_url(@employee), inertia: { errors: @employee.errors }
    end
  end

  # DELETE /employees/1
  def destroy
    @employee.destroy!
    redirect_to employees_url, notice: "Employee was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def employee_params
      params.require(:employee).permit(:name, :role, :avatar_url)
    end

    def serialize_employee(employee)
      employee.as_json(only: [
        :id, :name, :role
      ])
    end
end
