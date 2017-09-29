# == Schema Information
#
# Table name: cats
#
#  id          :integer          not null, primary key
#  name        :string
#  location_id :integer
#  img_url     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Cat < ApplicationRecord

    belongs_to :location, 
    primary_key: :id,
    foreign_key: :location_id, 
    class_name: :Location
    
end
