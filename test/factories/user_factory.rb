# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    sequence :email do |n|
      "test_user_#{n}@email.com"
    end
  end
end
