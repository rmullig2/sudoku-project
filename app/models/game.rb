require 'pry'
require 'matrix'

class Game < ApplicationRecord
  belongs_to :user
  validates :level, presence: true
  attr_reader :start, :score, :moves, :solution
  BLANK = ['', '', '', '', '', '', '', '', '']
  #BLANK = []
  FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  def initialize(user_id)
    super
    @user_id = user_id
    @level = level
    @start = [ [ ['', '', ''], ['', '', ''], ['', '', ''] ], [ ['', '', ''], ['', '', ''], ['', '', ''] ], [ ['', '', ''], ['', '', ''], ['', '', ''] ],
               [ ['', '', ''], ['', '', ''], ['', '', ''] ], [ ['', '', ''], ['', '', ''], ['', '', ''] ], [ ['', '', ''], ['', '', ''], ['', '', ''] ],
               [ ['', '', ''], ['', '', ''], ['', '', ''] ], [ ['', '', ''], ['', '', ''], ['', '', ''] ], [ ['', '', ''], ['', '', ''], ['', '', ''] ]]
    @score = 0
    @moves = 0
    @solution = Matrix[*Solution.order("RANDOM()").first.values]
  end
  
  private
    def self.shuffle
      rows, cols = [], []
      for i in 0..8
        rows[i] = @solution.row(i)
        cols(i) = @solution.transpose.row(i)
      end
      
      case rand(4)
      when 0    # swap single rows
        single_swap(rows)
      when 1    # swap single columns
        single_swap(cols)
      when 2    # swap row groups
        group_swap(rows)
      when 3    # swap column groups
        group_swap(cols)
      end
    end
    
    def single_swap(rows)
#     Setup variables to be used in the shuffle
      multiplier, excluded = rand(3), rand(3)
      idx = [0,1,2].select do
        |elem| != excluded
      end
      rows[idx[0]*multiplier],rows[idx[1]*multiplier] = rows[idx[1]*multiplier],rows[idx[0]*multiplier]
    end
    
end
