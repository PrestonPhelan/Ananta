class Employee < ApplicationRecord
  validates :organization_id, :user_id, presence: true
  validates :organization_id, uniqueness: { scope: :user_id }

  belongs_to :organization
  belongs_to :user
end
