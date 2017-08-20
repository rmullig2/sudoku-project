class User < ApplicationRecord
  before_create :create_slug
  validates :name, presence: true, uniqueness: true
  has_many :games
  
  def self.find_by_slug(slug)
    self.find_by(name: slug)
  end
end

#User.find_by_slug("derekj")