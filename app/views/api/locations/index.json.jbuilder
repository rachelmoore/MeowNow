@locations.each do |location|
    json.set! location.id do
      json.extract! location,
                            :id,
                            :location_name,
                            :street_address,
                            :city,
                            :state,
                            :latitude,
                            :longitude,
                            :num_cats,
                            :free,
                            :adoptable
  end
end
