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
  
  test "can create a new game" do
    user = User.create(name: "marianor")
    user.games.create(level: 3)
    assert_equal(1, user.games.count)
  end
end
