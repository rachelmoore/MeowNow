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
end
