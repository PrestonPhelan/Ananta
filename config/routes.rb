Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :show, :create, :update]
    resources :organizations, only: [:create]
    resources :employees, only: [:create]
    resources :teams, only: [:index, :show, :create] do
      resources :projects, only: [:index]
      resources :tasks, only: [:index]
    end
    resources :memberships, only: [:create]
    resources :projects, only: [:show, :create] do
      resources :tasks, only: [:index]
    end
    resources :tasks, only: [:show, :create, :update]
  end

  root to: "static_pages#root"
end
