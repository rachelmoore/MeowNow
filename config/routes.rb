Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :locations, only: [:index, :show] do
      resources :reviews, only: [:index, :create, :new, :update, :edit, :destroy]
    end
  end

  root to: 'static_pages#root'
end
