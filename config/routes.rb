Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create]
    resources :organizations, only: [:create]
    resources :employees, only: [:create]
    resources :teams, only: [:index, :create]
    resources :memberships, only: [:create]
  end

  root to: "static_pages#root"
end
