class Api::CatsController < ApplicationController

    def show 
       
    end 

    def random_cat_by_location
        @cat = Cat.where(location_id: params[:location_id]).sample
        unless @cat
            @cat = {name: "Unknown", img_url: "http://hellahoops.com/catdoodletransparent.png"} 
        end 
        render :show
    end 

end
