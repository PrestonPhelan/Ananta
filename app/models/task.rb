class Task < ApplicationRecord
  validates :creator_id, :project_id, presence: true

  belongs_to :header,
    class_name: :Task,
    optional: true

  belongs_to :creator,
    class_name: :User

  belongs_to :assignee,
    class_name: :User,
    optional: true

  belongs_to :parent_task,
    class_name: :Task,
    optional: true

  belongs_to :project
end
