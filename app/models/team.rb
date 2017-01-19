class Team < ApplicationRecord
  validates :name, :owner_id, presence: true
  validates :name, uniqueness: { scope: :organization_id }

  before_validation :ensure_organization

  belongs_to :owner,
    class_name: :User

  belongs_to :organization

  has_many :memberships
  has_many :members, through: :memberships, source: :user

  has_many :projects

  has_many :tasks, through: :projects

  def ensure_organization
    self.organization_id = Organization.first.id
  end
end
