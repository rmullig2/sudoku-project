class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.integer :solution, array: true, default: []
      t.integer :start, array: true, default: []
      t.integer :current_state, array: true, default: []
      t.integer :score
      t.integer :moves
      t.integer :level
      t.integer :user_id

      t.timestamps
    end
  end
end
