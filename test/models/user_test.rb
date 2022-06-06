require "test_helper"

class UserTest < ActiveSupport::TestCase
  test 'should create user' do
    assert build_stubbed(:user)
  end

  # validations
  test 'email should be present' do
    assert_not build_stubbed(:user, email: '').valid?
  end
end
