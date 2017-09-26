class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :location_id, null: false
      t.string :body, null: false
      t.integer :rating, null: false

      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :location_id
  end
end
