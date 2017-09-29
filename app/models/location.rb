# == Schema Information
#
# Table name: locations
#
#  id             :integer          not null, primary key
#  location_name  :string           not null
#  street_address :string           not null
#  city           :string           not null
#  state          :string           not null
#  latitude       :float
#  longitude      :float
#  num_cats       :integer          not null
#  free           :boolean          not null
#  adoptable      :boolean          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Location < ApplicationRecord

    has_many :reviews, 
    primary_key: :id,
    foreign_key: :location_id, 
    class_name: :Review

    has_many :cats, 
    primary_key: :id, 
    foreign_key: :location_id, 
    class_name: :Cat

end
