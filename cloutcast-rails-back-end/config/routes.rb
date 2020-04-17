Rails.application.routes.draw do
  resources :cast_categories
  resources :categories
  resources :cast_tags
  resources :tags
  resources :saved_casts
  resources :comments
  resources :casts
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
