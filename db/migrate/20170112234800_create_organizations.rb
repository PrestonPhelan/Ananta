class CreateOrganizations < ActiveRecord::Migration[5.0]
  def change
    create_table :organizations do |t|
      t.string :name, null: false
      t.string :image_url
      t.integer :owner_id, null: false

      t.timestamps
    end

    add_index :organizations, :owner_id
  end
end
