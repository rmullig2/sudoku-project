require 'test_helper'

class GameTest < ActiveSupport::TestCase
  test "cannot create a game without a user id" do
    game = Game.new
    assert_not game.save
  end
end
