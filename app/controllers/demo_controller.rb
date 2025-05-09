class DemoController < ApplicationController
  # Demonstrate deferred props.
  def defer
    render inertia: "Demo/Defer", props: {
      employees: -> { Employee.all.map { |employee| serialize_employee(employee) } },
      posts: InertiaRails.defer do
        sleep(4)
        Post.all.map { |post| serialize_post(post) }
      end
    }
  end

  private

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
