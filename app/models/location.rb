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
end
