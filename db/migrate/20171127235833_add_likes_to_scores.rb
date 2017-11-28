class AddLikesToScores < ActiveRecord::Migration[5.0]
  def change
    add_column :scores, :likes, :integer
  end
end
