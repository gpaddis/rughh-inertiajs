FactoryBot.define do
  factory :employee do
    name { Faker::Artist.name }
    role { Faker::Job.title }
  end
end
