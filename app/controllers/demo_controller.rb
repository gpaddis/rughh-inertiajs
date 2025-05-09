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

  private

  def employees
    Employee.all.map { |employee| serialize_employee(employee) }
  end

  def posts
    Post.all.map { |post| serialize_post(post) }
  end

  def serialize_employee(employee)
    employee.as_json(only: [
      :id, :name, :role
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
