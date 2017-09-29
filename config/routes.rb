Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :reviews, only: [:show]
    resources :locations, only: [:index, :show] do
      resources :reviews, only: [:index, :create, :new, :update, :edit, :destroy]
      resources :cats, only: [:show] do 
        get "random_cat_by_location", on: :collection
      end 
    end
  end

  root to: 'static_pages#root'
end
