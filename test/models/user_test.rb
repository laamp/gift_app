# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id              :uuid             not null, primary key
#  email           :string           not null
#  name            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'should create user' do
    assert build_stubbed(:user)
  end

  # validations
  test 'email should be present' do
    assert_not build_stubbed(:user, email: '').valid?
  end
end
