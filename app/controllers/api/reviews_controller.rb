class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json:
      @review.errors.full_messages
    end
  end

  def new
    render :new
  end

  def index
    @reviews = Location.find_by(id: params[:location_id]).reviews
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json:
      @review.errors.full_messages
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end


private

  def review_params
    params.require(:review).permit(:location_id, :author_id, :body, :rating)
  end


end
