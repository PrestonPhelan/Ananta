class AddParentProjectToTasks < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :project_id, :integer
  end
end
