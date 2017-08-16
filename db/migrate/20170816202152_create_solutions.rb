class CreateSolutions < ActiveRecord::Migration[5.0]
  def change
    create_table :solutions do |t|
      t.integer :rows, array: true

      t.timestamps
    end
  end
end
