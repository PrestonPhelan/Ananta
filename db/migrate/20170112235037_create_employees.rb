class CreateEmployees < ActiveRecord::Migration[5.0]
  def change
    create_table :employees do |t|
      t.integer :organization_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :employees, :organization_id
    add_index :employees, :user_id
    add_index :employees, [:organization_id, :user_id], unique: true;
  end
end
