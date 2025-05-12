class AddStatusToEmployees < ActiveRecord::Migration[8.0]
  def change
    add_column :employees, :status, :string
  end
end
