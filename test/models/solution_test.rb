require 'test_helper'

class SolutionTest < ActiveSupport::TestCase
  test "solution needs to have a length of nine" do
    testValues = [ [1], [2], [3], [4], [5], [6], [7], [8] ]
    sol_test = Solution.new(rows: testValues)
    assert_not sol_test.save
  end
end
