class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.integer :start, array:true, default: []
      t.integer :soution, array:true, default: []
    end
  end
end
