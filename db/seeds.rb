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
Project.delete_all
Task.delete_all

users = User.create([
  { username: 'TyrionLannister', email: 'tyrian@lannister.com', password: 'afhry867y', image_url: 'http://i.imgur.com/X9mB9KT.jpg' },
  { username: 'JonSnow', email: 'jon@snow-stark.com', password: 'aeghaet23t34g', image_url: 'http://i.imgur.com/Dfl5oLz.jpg' },
  { username: 'CerseiLannister', email: 'cersei@lannister.com', password: 'tjtrhs325', image_url: 'http://i.imgur.com/ZXgRzmd.jpg' },
  { username: 'DaenerysTargaryen', email: 'mother-of-dragons@real_targaryen.com', password: 'aethwtrt343t', image_url: 'http://i.imgur.com/pXoR7Vr.jpg' },
  { username: 'JaimeLannister', email: 'jaime@lannister.com', password: 'a34t2adfd', image_url: 'http://i.imgur.com/6m73kUM.jpg' },
  { username: 'AryaStark', email: 'arya@stark.com', password: 'awrghae7ty', image_url: 'http://i.imgur.com/PNRexqT.jpg' },
  { username: 'Sansa_Stark', email: 'sansa@stark.com', password: 'aeghft7q394yty8', image_url: 'http://i.imgur.com/aToTLEv.jpg' },
  { username: 'Samwell_Tarly', email: 'sam@the-wall.com', password: 'awg34t2', image_url: 'http://i.imgur.com/MqtcSBP.jpg' },
  { username: 'TheonGreyjoy', email: 'theon@iron-islands.com', password: 'aw4y57yag', image_url: 'http://i.imgur.com/a0St9jt.jpg' },
  { username: 'PetyrBaelish', email: 'littlefinger@littlefinger.com', password: '6rkuhdhg', image_url: 'http://i.imgur.com/WOqR5Aq.jpg' },
  { username: 'JorahMormont', email: 'jorah@targaryen-serve.com', password: 'rhfabbag', image_url: 'http://i.imgur.com/1Gsd23M.jpg' },
  { username: 'DavosSeaworth', email: 'davos@seaworth.com', password: 'aerhgiu7y8', image_url: 'http://i.imgur.com/pejXPp7.jpg' },
  { username: 'EddardStark', email: 'ned@stark.com', password: '2849tuhg9ui', image_url: 'http://i.imgur.com/8m9pdHM.jpg' },
  { username: 'Tywin_Lannister', email: 'tywin@lannister.com', password: 'erhigy8', image_url: 'http://i.imgur.com/lueIrVF.jpg' },
  { username: 'Varys', email: 'varys@kingslanding.com', password: 'ajerguhi7y', image_url: 'http://i.imgur.com/LmJP3z0.jpg' },
  { username: 'Bronn', email: 'bronn@bronn.com', password: 'ajwiry78', image_url: 'http://i.imgur.com/WhmIdUT.jpg' }
])

jon = User.find_by_username('Jon_Snow')
guest = User.find_by_username('TyrionLannister')

organizations = Organization.create([
  { name: 'Westeros', owner_id: jon.id }
  ])

org = Organization.find_by_name('Westeros')

teams = Team.create([
  { name: 'Crew To Monkey Island', owner_id: jon.id, organization_id: org.id },
  { name: 'Team Awesome', owner_id: guest.id, organization_id: org.id }
  ])

crew = Team.find_by_name('Crew To Monkey Island')
awesome = Team.find_by_name('Team Awesome')

memberships = Membership.create([
  { team_id: crew.id, user_id: jon.id },
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
  { project_id: hire_crew.id, name: "Hire Navigator", due: DateTime.new(2017, 1, 20), creator_id: jon.id, assignee_id: jon.id},
  { project_id: hire_crew.id, name: "Hire First Mate", due: DateTime.now.tomorrow.to_date, creator_id: jon.id, assignee_id: guest.id},
  { project_id: hire_crew.id, name: "Hire Cook", due: DateTime.now.yesterday.to_date, creator_id: jon.id},
  { project_id: map.id, name: "Interogate Salty Sam", due: DateTime.now, creator_id: jon.id},
  { project_id: map.id, name: "Bribe Jacquotte Delahaye", creator_id: jon.id},
  { project_id: ship.id, name: "Blackmail Stan the Salesman", creator_id: jon.id}
])
