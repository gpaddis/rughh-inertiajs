FactoryBot.define do
  factory :employee do
    name { Faker::Name.name }
    role { Faker::Job.title }
  end
end
