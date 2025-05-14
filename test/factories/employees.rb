FactoryBot.define do
  factory :employee do
    name { Faker::Artist.unique.name }
    role { Faker::Job.unique.title }
    status { [ "active", "inactive" ].sample }
  end
end
