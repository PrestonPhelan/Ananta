class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :image_url
      t.string :role
      t.string :department
      t.string :about

      t.timestamps
    end
  end

  add_index :users, :username
  add_index :users, :email
  add_index :users, :session_token
end
