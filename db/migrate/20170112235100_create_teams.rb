class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :owner_id, null: false
      t.integer :organization_id

      t.timestamps
    end

    add_index :teams, [:owner_id, :organization_id]
  end
end
