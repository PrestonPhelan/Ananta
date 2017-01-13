# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {username: 'KingPreston', email: 'preston@ananta.com', password: 'password', image_url: 'http://rs405.pbsrc.com/albums/pp131/karkela/guybrush.jpg~c200'},
  {username: 'Guest', email: 'guest@ananta.com', password: 'password', image_url: 'http://rs405.pbsrc.com/albums/pp131/karkela/guybrush.jpg~c200'}])
