FactoryBot.define do
  factory :post do
    title { Faker::Lorem.sentence }
    body { Faker::Lorem.paragraph(sentence_count: rand(3..25)) }
  end
end
