class DemoController < ApplicationController
  # Demonstrate deferred props.
  def defer
    render inertia: "Demo/Defer", props: {
      employees: -> { employees },
      posts: InertiaRails.defer { sleep(4); posts }
    }
  end

  # Demonstrate loading props when they enter the viewport.
  def load_when_visible
    render inertia: "Demo/LoadWhenVisible", props: {
      employees: -> { employees },
      posts: InertiaRails.optional { posts }
    }
  end

  # Demonstrate prefetching.
  def prefetch
    employee = Employee.find(params[:employee_id] || 1)

    render inertia: "Demo/Prefetch", props: {
      employee: -> { serialize_employee(employee) }
    }
  end

  # Demonstrate partial reloads.
  def partial_reloads
    employees = params[:active] ? Employee.active.all : Employee.all

    render inertia: "Demo/PartialReloads", props: {
      current_user: -> { FactoryBot.build(:employee) },
      employees: -> { employees.map { |employee| serialize_employee(employee) } }
    }
  end

  private

  def employees
    Employee.all.map { |employee| serialize_employee(employee) }
  end

  def posts
    Post.all.includes(:comments).map { |post| serialize_post(post) }
  end

  def serialize_employee(employee)
    employee.as_json(only: [
      :id, :name, :role, :status
    ])
  end

  def serialize_post(post)
    post.as_json(only: [
      :id, :title, :body
    ], include: [
      :comments
    ])
  end
end
