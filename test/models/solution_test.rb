require 'test_helper'
require 'pry'

class SolutionTest < ActiveSupport::TestCase
  test "solution needs to have a length of nine" do
    testValues = [ [1], [2], [3], [4], [5], [6], [7], [8] ]
    sol_test = Solution.create(rows: testValues)
    assert_nil(sol_test.rows)
  end
end
