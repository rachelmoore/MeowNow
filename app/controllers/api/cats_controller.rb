class Api::CatsController < ApplicationController

    def show 
       
    end 

    def random_cat_by_location
        @cat = Cat.where(location_id: params[:location_id]).sample
        unless @cat
            @cat = {name: "Unknown", img_url: "http://res.cloudinary.com/df9oqycdp/image/upload/c_crop,h_382,w_382/v1506710329/Cat_Helmet_ayhx66.jpg"} 
        end 
        render :show
    end 

end
