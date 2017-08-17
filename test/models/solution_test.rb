require 'test_helper'
require 'pry'

class SolutionTest < ActiveSupport::TestCase
  setup do
    @solution = Solution.(rows: [ [1,3,4,8,7,9,5,2,6], [6,7,9,5,2,4,1,3,8], [2,5,8,6,1,3,4,9,7],
          [8,9,3,1,4,5,6,7,2], [5,6,1,7,9,2,3,8,4], [4,2,7,3,6,8,9,5,1],
          [3,8,6,4,5,7,2,1,9], [7,1,2,9,3,6,8,4,5], [9,4,5,2,8,1,7,6,3]])
  end
  
  test "solution needs to have a length of nine" do
    testValues = [ [1], [2], [3], [4], [5], [6], [7], [8] ]
    sol_test = Solution.create(rows: testValues)
    assert_nil(sol_test.rows)
    #binding.pry
    assert_equal(9, @solution.rows.count)
  end
end