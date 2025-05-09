class DemoController < ApplicationController
  def defer
    @employees = Employee.all
    render inertia: "Demo/Defer", props: {
      employees: @employees.map do |employee|
        serialize_employee(employee)
      end
    }
  end

  private

  def serialize_employee(employee)
    employee.as_json(only: [
      :id, :name, :role
    ])
  end
end
