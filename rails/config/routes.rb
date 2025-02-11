Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "health_check", to: "health_check#index"
      mount_devise_token_auth_for "User", at: "auth"
      namespace :user do
        resource :confirmations, only: [:update]
      end

      namespace :current do
        resource :user, only: [:show]
        resources :articles, only: [:index, :show, :create, :update]
      end
      resources :articles, only: [:index, :show]

      # ユーザー認証関連
      post "signup", to: "users#create"
      post "login", to: "sessions#create"
      delete "logout", to: "sessions#destroy"
      post "password/forgot", to: "passwords#forgot"
      put "password/reset", to: "passwords#reset"

      # ユーザー情報関連
      resources :users, only: [:show, :update] do
        get "reviews", to: "users#reviews"
        get "stats", to: "users#stats"
      end

      # ゲーム情報関連
      resources :games, only: [:index, :show] do
        resources :reviews, only: [:index, :create]
        get "stats", to: "games#stats"
      end

      # レビュー関連
      resources :reviews, only: [:update, :destroy] do
        post "like", to: "reviews#like"
        delete "like", to: "reviews#unlike"
      end

      # 検索機能関連
      get "search", to: "search#index"

      # タグ関連
      resources :tags, only: [:index, :create, :destroy]

      # メカニクス関連
      resources :mechanics, only: [:index, :create, :destroy]

      # ソーシャルログイン関連
      get "auth/google_oauth2/callback", to: "sessions#google_oauth2"
      get "auth/twitter/callback", to: "sessions#twitter"
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # config/routes.rb
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
