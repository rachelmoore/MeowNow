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

ActiveRecord::Schema.define(version: 20170929053119) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cats", force: :cascade do |t|
    t.string "name"
    t.integer "location_id"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_cats_on_location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "location_name", null: false
    t.string "street_address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.float "latitude"
    t.float "longitude"
    t.integer "num_cats", null: false
    t.string "free", null: false
    t.string "adoptable", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phone"
    t.string "website"
    t.string "img_url"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "location_id", null: false
    t.string "body", null: false
    t.integer "rating", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["location_id"], name: "index_reviews_on_location_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
