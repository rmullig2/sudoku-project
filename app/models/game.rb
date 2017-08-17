require 'pry'
require 'matrix'

class Game < ApplicationRecord
  belongs_to :user
  validates :level, presence: true
  attr_accessor :start, :score, :moves, :solution
  
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
    rand(10).times do
      @solution.shuffle
    end
  end
  
    def shuffle
      rows, cols = [], []
      for i in 0..8
        rows[i] = @solution.row(i)
        cols[i] = @solution.transpose.row(i)
      end
      
      case rand(5)
      when 0    # swap single rows
        single_swap(rows)
        @solution = Matrix[*rows]
      when 1    # swap single columns
        single_swap(cols)
        @solution = Matrix[*cols]
        @solution = @solution.transpose
      when 2    # swap row groups
        group_swap(rows)
        @solution = Matrix[*rows]
      when 3    # swap column groups
        group_swap(cols)
        @solution = Matrix[*cols]
        @solution = @solution.transpose
      when 4    # transpose rows and columns
        @solution = @solution.transpose
      end
    end
    
    def single_swap(vects)
#     Setup variables to be used in the shuffle
      multiplier, excluded = rand(3)*3, rand(3)
      idx = [0,1,2].select do |elem|
        elem != excluded
      end
      vects[idx[0]+multiplier],vects[idx[1]+multiplier] = vects[idx[1]+multiplier],vects[idx[0]+multiplier]
    end
    
    def group_swap(vects)
#     Setup variables to be used in the shuffle
      excluded = rand(3)
      grps = [0,1,2].select do |elem|
        elem != excluded
      end
      vects[grps[0]*3],vects[grps[1]*3] = vects[grps[1]*3],vects[grps[0]*3]
      vects[grps[0]*3+1],vects[grps[1]*3+1] = vects[grps[1]*3+1],vects[grps[0]*3+1]
      vects[grps[0]*3+2],vects[grps[1]*3+2] = vects[grps[1]*3+2],vects[grps[0]*3+2]
    end
    
end
