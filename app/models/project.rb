class Project < ApplicationRecord
  validates :name, presence: true

  belongs_to :team

  has_many :tasks
end
