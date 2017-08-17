class Solution < ApplicationRecord
  serialize :values
  validates :values, length: { is: 9 }
end

