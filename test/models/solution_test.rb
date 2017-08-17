require 'test_helper'
require 'pry'

class SolutionTest < ActiveSupport::TestCase
  setup do
    @good_solution = Solution.new(values: [ [1,3,4,8,7,9,5,2,6], [6,7,9,5,2,4,1,3,8], [2,5,8,6,1,3,4,9,7],
          [8,9,3,1,4,5,6,7,2], [5,6,1,7,9,2,3,8,4], [4,2,7,3,6,8,9,5,1],
          [3,8,6,4,5,7,2,1,9], [7,1,2,9,3,6,8,4,5], [9,4,5,2,8,1,7,6,3]])
    @bad_solution = Solution.new(values: [ [1,3,4,8,7,9,5,2,6], [6,7,9,5,2,4,1,3,8], [2,5,8,6,1,3,4,9,7],
          [8,9,3,1,4,5,6,7,2], [5,6,1,7,9,2,3,8,4], [4,2,7,3,6,8,9,5,1],
          [3,8,6,4,5,7,2,1,9], [7,1,2,9,3,6,8,4,5] ])

  end
  
  test "can create a valid solution" do
    #binding.pry
    assert(@good_solution.save)
  end
  
  test "cannot create a solution with an invalid length" do
    assert_not(@bad_solution.save)
  end
end
