class Solution < ApplicationRecord
  validates :rows, length: { is: 9 }
end
