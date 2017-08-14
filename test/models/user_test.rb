require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "cannot create a user without a username" do
    user = User.new
    assert_not user.save
  end
end
