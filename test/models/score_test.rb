require 'test_helper'

class ScoreTest < ActiveSupport::TestCase
  test "cannot create a score without a name" do
    score = Score.new(score: 37851)
    assert_not score.save
  end
  
  test "cannot create a score without the score" do
    score = Score.new(name: "ray")
    assert_not score.save
  end
  
  test "name must be only three characters" do
    score = Score.create(name: "raym", score: 37851)
    assert_not score.save
  end
end
