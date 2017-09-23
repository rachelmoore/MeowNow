class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :location_name, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.float :latitude
      t.float :longitude
      t.integer :num_cats, null: false
      t.boolean :free, null: false
      t.boolean :adoptable, null: false

      t.timestamps
    end
  end
end
