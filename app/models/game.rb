class Game < ApplicationRecord
  belongs_to :user
  validates :level, presence: true
  attr_reader :start, :score, :moves, :solution
  
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
      ['', '', '', '', '', '', '', '', '']
    end
  
end
