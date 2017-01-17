class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.boolean :header, null: false, default: false
      t.integer :header_id
      t.datetime :start
      t.datetime :due
      t.integer :time
      t.boolean :started, null: false, default: true
      t.boolean :completed, null: false, default: false
      t.datetime :completed_on
      t.integer :creator_id, null: false
      t.integer :assignee_id
      t.integer :completed_by_id
      t.integer :parent_task_id

      t.timestamps
    end

    add_index :tasks, :header_id
    add_index :tasks, :creator_id
    add_index :tasks, :assignee_id
    add_index :tasks, :completed_by_id
    add_index :tasks, :parent_task_id
  end
end
