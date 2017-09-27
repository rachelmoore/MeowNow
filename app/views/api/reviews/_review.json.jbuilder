json.extract! review, :id, :location_id, :author_id, :body, :rating
json.set! :author, review.author.username
