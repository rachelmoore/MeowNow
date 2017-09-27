
@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :location_id, :author_id, :body, :rating, :author
  end
end 
