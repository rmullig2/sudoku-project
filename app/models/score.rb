class Score < ApplicationRecord
  validates :name, presence: true, length: { is: 3 }
  validates :score, presence: true
  attr_accessor :name, :score
end
