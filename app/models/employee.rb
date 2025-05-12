class Employee < ApplicationRecord
  scope :active, -> { where(status: "active") }
end
