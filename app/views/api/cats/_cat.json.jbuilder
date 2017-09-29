if cat[:id] != nil
    json.extract! cat, :id, :location_id, :name, :img_url
else 
    json.extract! cat, :name, :img_url
end 

