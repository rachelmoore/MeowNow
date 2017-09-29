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

require 'test_helper'

class CatTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
