# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

FactoryBot.create_list(:employee, 30)
FactoryBot.create_list(:post, 30).each do |post|
  FactoryBot.create_list(:comment, rand(1..20), post: post)
end
