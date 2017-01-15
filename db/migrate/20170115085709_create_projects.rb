class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.boolean :archived, default: false
      t.integer :team_id, null: false

      t.timestamps
    end

    add_index :projects, :team_id
  end
end
