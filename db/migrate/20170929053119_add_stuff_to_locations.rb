class AddStuffToLocations < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :phone, :string
    add_column :locations, :website, :string
    add_column :locations, :img_url, :string
    change_column :locations, :free, :string
    change_column :locations, :adoptable, :string
  end
end
