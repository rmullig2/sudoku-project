require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "cannot create a user without a username" do
    user = User.new
    assert_not user.save
  end
  
  test "cannot create a duplicate user" do
    user = User.new(name: "derekj")
    assert_not user.save
  end
end
