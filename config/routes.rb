Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      resources :users, param: :slug, only: [ :index, :create, :show ] do
      #  resources :games
      end
      #resources :games, only: :index
    end
  end
end
