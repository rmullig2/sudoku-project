require 'pry'

class Game < ApplicationRecord
  belongs_to :user
  validates :level, presence: true
  attr_reader :start, :score, :moves, :solution
  #BLANK = ['', '', '', '', '', '', '', '', '']
  BLANK = []
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
    @solution = Game.newSolution
  end
  
  private
    def self.newSolution
      rows = []
      cols = []
      sol = []
      
      for i in 0..8
        rows[i] = BLANK.dup
        cols[i] = BLANK.dup
        sol[i] = BLANK.dup
      end
      
      for i in 0..8
        row = (i / 3) * 3
        col = (i % 3) * 3
        sol[i] = Game.subPuzzle([rows[row], rows[row+1], rows[row+2]], [cols[col], cols[col+1], cols[col+2]])
      end
      sol
    end
    
    def self.subPuzzle(rows, cols)
      puzzle = BLANK.dup
      for i in 0..rows.length-1
        for j in 0..cols.length-1
          valid = FULL - rows[i] - cols[j] - puzzle
          value = valid.sample
          rows[i].push(value)
          cols[j].push(value)
          puzzle[i * 3 + j] = value
          #binding.pry
        end
      end
      puzzle
    end
  
end
