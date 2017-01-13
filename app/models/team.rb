class Team < ApplicationRecord
  validates :name, :owner_id, presence: true
  validates :name, uniqueness: { scope: :organization_id }

  belongs_to :owner,
    class_name: :User

  belongs_to :organization

  has_many :memberships

  has_many :members, through: :memberships, source: :user
end
