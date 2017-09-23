class Api::LocationsController < ApplicationController

  def index
    @locations = Location.all
    render :index
  end

  def show
    @location = Location.find(params[:id])
    render :show
  end

  private

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
