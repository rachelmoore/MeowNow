class CreateCats < ActiveRecord::Migration[5.1]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :location_id
      t.string :img_url

      t.timestamps
    end
    add_index :cats, :location_id
  end
end
