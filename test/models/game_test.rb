require 'test_helper'

class GameTest < ActiveSupport::TestCase
  test "cannot create a game without a user id" do
    game = Game.new
    assert_not game.save
  end
  
  test "cannot create a game without specifying the level" do
    game = Game.new(user_id: User.first.id)
    assert_not game.save
  end
end
