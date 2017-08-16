require 'pry'

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
    @solution = Game.newSolution
    #binding.pry
  end
  
  private
    def self.initArrays(rows, cols, sol)
      for i in 0..8
        rows[i] = BLANK.dup
        cols[i] = BLANK.dup
        sol[i] = BLANK.dup
      end
    end
    
    def self.newSolution
      rows = []
      cols = []
      sol = []
      
      Game.initArrays(rows, cols, sol)
      for num in 1..9
        for puzzle in 0..8
          row_num = puzzle / 3 * 3
          col_num = puzzle % 3 * 3
          # change to rows, cols, row_num, col_num
          Game.placeNumber(num, sol[puzzle], rows, cols, row_num, col_num)
        end
      end
      sol
    end
    
    def self.placeNumber(num, puzzle, rows, cols, row_num, col_num)
      valid_rows = []
      valid_cols = []
      for i in row_num..row_num+2
        if !(rows[i].include? num)
          valid_rows.push(i)
        end
      end
      for i in col_num..col_num+2
        if !(cols[i].include? num)
          valid_cols.push(i)
        end
      end
      #binding.pry
      while !(puzzle.include? num)
        row = valid_rows.sample
        col = valid_cols.sample
        # figure out how to do this conversion  (row / 3 * 3) + (col % 3)
        pos = (row % 3 * 3) + (col % 3)
        if puzzle[pos].blank?
          puzzle[pos] = num
          rows[row][col] = num
          cols[col][row] = num
        end
      end
    end
  
end
