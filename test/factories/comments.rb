FactoryBot.define do
  factory :comment do
    post
    body { Faker::Lorem.paragraph }
  end
end
