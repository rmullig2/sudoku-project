class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.integer :solution, array: true
      t.integer :start, array: true
      t.integer :current_state, array: true
      t.integer :score
      t.integer :moves

      t.timestamps
    end
  end
end
