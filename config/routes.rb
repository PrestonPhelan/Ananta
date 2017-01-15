Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create]
    resources :organizations, only: [:create]
    resources :employees, only: [:create]
    resources :teams, only: [:index, :create] do
      resources :projects, only: [:index]
    end
    resources :memberships, only: [:create]
    resources :projects, only: [:create]
  end

  root to: "static_pages#root"
end
