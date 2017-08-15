require 'test_helper'

class GameTest < ActiveSupport::TestCase
  test "cannot create a game without a user id" do
    game = Game.new(user_id: nil)
    assert_not game.save
  end
  
  test "cannot create a game without specifying the level" do
    game = Game.new(user_id: User.first.id)
    assert_not game.save
  end
  
  test "new game should have starting state with nine arrays" do
    game = Game.create(user_id: User.first.id, level: 1)
    assert_not_nil(game.start)
    assert_equal(9, game.start.length)
  end
end
