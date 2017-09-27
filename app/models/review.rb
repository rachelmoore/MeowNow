# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  location_id :integer          not null
#  body        :string           not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
    belongs_to :author, 
    primary_key: :id,
    foreign_key: :author_id, 
    class_name: :User
    
    belongs_to :location, 
    primary_key: :id, 
    foreign_key: :location_id, 
    class_name: :Location

end
