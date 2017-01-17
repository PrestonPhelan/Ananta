# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170117173452) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "employees", force: :cascade do |t|
    t.integer  "organization_id", null: false
    t.integer  "user_id",         null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["organization_id", "user_id"], name: "index_employees_on_organization_id_and_user_id", unique: true, using: :btree
    t.index ["organization_id"], name: "index_employees_on_organization_id", using: :btree
    t.index ["user_id"], name: "index_employees_on_user_id", using: :btree
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "team_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id", "user_id"], name: "index_memberships_on_team_id_and_user_id", unique: true, using: :btree
    t.index ["team_id"], name: "index_memberships_on_team_id", using: :btree
    t.index ["user_id"], name: "index_memberships_on_user_id", using: :btree
  end

  create_table "organizations", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "image_url"
    t.integer  "owner_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_organizations_on_owner_id", using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name",                       null: false
    t.boolean  "archived",   default: false
    t.integer  "team_id",                    null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.index ["team_id"], name: "index_projects_on_team_id", using: :btree
  end

  create_table "tasks", force: :cascade do |t|
    t.string   "name",                            null: false
    t.boolean  "header",          default: false, null: false
    t.integer  "header_id"
    t.datetime "start"
    t.datetime "due"
    t.integer  "time"
    t.boolean  "started",         default: true,  null: false
    t.boolean  "completed",       default: false, null: false
    t.datetime "completed_on"
    t.integer  "creator_id",                      null: false
    t.integer  "assignee_id"
    t.integer  "completed_by_id"
    t.integer  "parent_task_id"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.integer  "project_id"
    t.index ["assignee_id"], name: "index_tasks_on_assignee_id", using: :btree
    t.index ["completed_by_id"], name: "index_tasks_on_completed_by_id", using: :btree
    t.index ["creator_id"], name: "index_tasks_on_creator_id", using: :btree
    t.index ["header_id"], name: "index_tasks_on_header_id", using: :btree
    t.index ["parent_task_id"], name: "index_tasks_on_parent_task_id", using: :btree
  end

  create_table "teams", force: :cascade do |t|
    t.string   "name"
    t.integer  "owner_id",        null: false
    t.integer  "organization_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["owner_id", "organization_id"], name: "index_teams_on_owner_id_and_organization_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "image_url"
    t.string   "role"
    t.string   "department"
    t.string   "about"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
