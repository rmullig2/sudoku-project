class User < ApplicationRecord
  before_create :create_slug
  validates :name, presence: true, uniqueness: true
  has_many :games
  has_secure_password
  
  def self.find_by_slug(slug)
    self.find_by(name: slug)
  end
end
