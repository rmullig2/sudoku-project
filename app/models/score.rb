class Score < ApplicationRecord
  validates :name, presence: true
  validates :time, presence: true
  #attr_accessor :name, :time
end
