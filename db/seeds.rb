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
  { username: 'GuybrushThreepwood', email: 'guybrush@ananta.com', password: 'password', image_url: 'http://rs405.pbsrc.com/albums/pp131/karkela/guybrush.jpg~c200' },
  { username: 'Guest', email: 'guest@ananta.com', password: 'password', image_url: 'http://rs405.pbsrc.com/albums/pp131/karkela/guybrush.jpg~c200' }])

guybrush = User.find_by_username('GuybrushThreepwood')
guest = User.find_by_username('Guest')

organizations = Organization.create([
  { name: 'Monkey Island', owner_id: guybrush.id }
  ])

org = Organization.find_by_name('Monkey Island')

teams = Team.create([
  { name: 'Crew To Monkey Island', owner_id: guybrush.id, organization_id: org.id },
  { name: 'Team Awesome', owner_id: guest.id, organization_id: org.id }
  ])

crew = Team.find_by_name('Crew To Monkey Island')
awesome = Team.find_by_name('Team Awesome')

memberships = Membership.create([
  { team_id: crew.id, user_id: guybrush.id },
  { team_id: crew.id, user_id: guest.id },
  { team_id: awesome.id, user_id: guest.id }
])

projects = Project.create([
  { team_id: crew.id, name: "Hire Crew" },
  { team_id: crew.id, name: "Find Map" },
  { team_id: crew.id, name: "Obtain Ship" }
])

hire_crew = Project.find_by_name("Hire Crew")
map = Project.find_by_name("Find Map")
ship = Project.find_by_name("Obtain Ship")

tasks = Task.create([
  { project_id: hire_crew.id, name: "Hire Navigator", due: DateTime.new(2017, 1, 20)},
  { project_id: hire_crew.id, name: "Hire First Mate", due: DateTime.new(2017, 1, 20)},
  { project_id: hire_crew.id, name: "Hire Cook", due: DateTime.new(2017, 1, 20)},
  { project_id: map.id, name: "Interogate Salty Sam", due: DateTime.new(2017, 1, 19)},
  { project_id: map.id, name: "Bribe Jacquotte Delahaye"},
  { project_id: ship.id, name: "Blackmail Stan the Salesman"}
])
