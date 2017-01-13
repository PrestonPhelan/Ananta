class Organization < ApplicationRecord
  validates :name, :owner_id, presence: true

  belongs_to :owner,
    class_name: :User

  has_many :hirings,
    class_name: :Employee

  has_many :employees, through: :hirings, source: :user

  has_many :teams

  has_many :memberships
  has_many :members, through: :memberships, source: :user
end
