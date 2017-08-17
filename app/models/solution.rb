require 'matrix'
require 'pry'

class Solution < ApplicationRecord
  attr_accessor :rows, :matrix
  
  def initialize(rows)
    super
    @rows = rows[:rows]
    if @rows.length == 9
      @matrix = Solution.createMatrix(@rows)
    else
      @matrix = nil
      @rows = nil
    end
    #binding.pry
  end
  
  private
    def self.createMatrix(rows)
      Matrix[ rows[0], rows[1], rows[2], rows[3], rows[4], rows[5], rows[6], rows[7], rows[8] ]
    end
end

