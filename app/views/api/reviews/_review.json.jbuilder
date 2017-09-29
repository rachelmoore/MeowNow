json.extract! review, :id, :location_id, :author_id, :body, :rating
json.author do  
    json.extract! review.author, :username
end 
