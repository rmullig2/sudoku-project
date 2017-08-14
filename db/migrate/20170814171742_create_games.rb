class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.array :solution
      t.array :start
      t.array :current_state
      t.integer :score
      t.integer :moves

      t.timestamps
    end
  end
end
