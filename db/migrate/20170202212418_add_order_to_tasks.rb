class AddOrderToTasks < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :order, :integer
  end
end
