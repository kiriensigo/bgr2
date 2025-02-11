Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show] do
        resources :reviews, only: [:index, :create]
      end
      resources :users, only: [:create, :show, :update] do
        member do
          get :reviews
          get :stats
        end
      end
      resources :tags, only: [:index, :create, :destroy]
      resources :sessions, only: [:create, :destroy] do
        collection do
          post :google_oauth2
          post :twitter
        end
      end
      resources :search, only: [:index]
      resources :passwords, only: [:create, :update]
      namespace :user do
        resources :confirmations, only: [:update]
      end
    end
  end
end 