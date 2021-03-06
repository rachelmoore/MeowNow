class Api::LocationsController < ApplicationController

  def index
    if params[:data] && params[:data][:results]
      @locations = Location.where('latitude BETWEEN ? AND ?', southwest[:lat], northeast[:lat]).where('longitude BETWEEN ? AND ?', southwest[:lng], northeast[:lng])
    elsif params[:data]
      @locations = Location.where('latitude BETWEEN ? AND ?', update_southwest[:lat], update_northeast[:lat]).where('longitude BETWEEN ? AND ?', update_southwest[:lng], update_northeast[:lng])
    else 
      @locations = Location.all
    end
    render :index
  end

  def show
    @location = Location.find(params[:id])
    render :show
  end

  private

  def bounds
    params[:data][:results]["0"][:geometry][:bounds]
  end

  def northeast
    params[:data][:results]["0"][:geometry][:bounds][:northeast]
  end

  def southwest
    params[:data][:results]["0"][:geometry][:bounds][:southwest]
  end

  def update_northeast
    params[:data][:northEast]
  end

  def update_southwest
    params[:data][:southWst]
  end

  def location_params
    params.require(:location).permit(
                                      :location_name,
                                      :street_address,
                                      :city,
                                      :state,
                                      :latitude,
                                      :longitude,
                                      :num_cats,
                                      :free,
                                      :adoptable
                                      )
  end

end
