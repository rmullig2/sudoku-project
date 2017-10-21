class Score < ApplicationRecord
  validates :name, presence: true, length: { is: 3 }
  validates :time, presence: true
  #attr_accessor :name, :time
end
