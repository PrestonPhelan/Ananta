# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Team.delete_all
Membership.delete_all
Organization.delete_all

users = User.create([
  {username: 'GuybrushThreepwood', email: 'guybrush@ananta.com', password: 'password', image_url: 'http://rs405.pbsrc.com/albums/pp131/karkela/guybrush.jpg~c200'},
  {username: 'Guest', email: 'guest@ananta.com', password: 'password', image_url: 'http://rs405.pbsrc.com/albums/pp131/karkela/guybrush.jpg~c200'}])

organizations = Organization.create([
  {name: 'Monkey Island', owner_id: 1}
  ])

teams = Team.create([
  {name: 'Crew To Monkey Island', owner_id: 1, organization_id: 1},
  {name: 'Team Awesome', owner_id: 2, organization_id: 1}
  ])

memberships = Membership.create([
  {team_id: 1, user_id: 1},
  {team_id: 1, user_id: 2},
  {team_id: 2, user_id: 2}
  ])
