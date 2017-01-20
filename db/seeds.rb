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
  { username: 'TyrionLannister', email: 'tyrion@lannister.com', password: 'password',
    image_url: 'http://i.imgur.com/X9mB9KT.jpg', role: 'The Imp', department: 'House Lannister',
    about: 'Nicknamed "The Imp" or "Halfman", Tyrion Lannister is the younger brother of Cersei and Jaime Lannister. He is a dwarf; and his mother died during his birth, for which his father, Tywin Lannister, blames him. While not physically powerful, Tyrion has a cunning mind and often uses to his advantage the fact that others constantly underestimate him.'},

  { username: 'JonSnow', email: 'jon@snow-stark.com', password: 'aeghaet23t34g',
    image_url: 'http://i.imgur.com/Dfl5oLz.jpg', role: 'The White Wolf', department: 'The Wall',
    about: 'Knows nothing.'},

  { username: 'CerseiLannister', email: 'cersei@lannister.com', password: 'tjtrhs325',
    image_url: 'http://i.imgur.com/ZXgRzmd.jpg', role: 'Queen Regent', department: 'House Lannister',
    about: 'Cersei Lannister, Queen of the Seven Kingdoms of Westeros, is the wife of King Robert Baratheon. Her father arranged the marriage when she was a teenager, initiating himself as a political counselor for King Robert.'},

  { username: 'DaenerysTargaryen', email: 'mother-of-dragons@real_targaryen.com', password: 'aethwtrt343t',
    image_url: 'http://i.imgur.com/pXoR7Vr.jpg', role: 'Mother of Dragons', department: 'House Targaryen',
    about: "Daenerys Targaryen is the exiled princess of the Targaryen dynasty. Also called 'the Stormborn', she and her brother Viserys were smuggled to Essos during the end of Robert's Rebellion."},

  { username: 'JaimeLannister', email: 'jaime@lannister.com', password: 'a34t2adfd',
    image_url: 'http://i.imgur.com/6m73kUM.jpg', role: 'Kingslayer', department: 'House Lannister',
    about: "Ser Jaime Lannister is a member of the Kingsguard and an exceptionally skilled swordsman. He is the Queen's twin brother. He is nicknamed 'Kingslayer' for killing the previous King, Aerys II, whom he was sworn to protect."},

  { username: 'AryaStark', email: 'arya@stark.com', password: 'awrghae7ty',
    image_url: 'http://i.imgur.com/PNRexqT.jpg', role: 'Cat of the Canals', department: 'House Stark',
    about: 'Arya Stark is the younger daughter and third child of Lord Eddard and Catelyn Stark of Winterfell. Ever the tomboy, Arya would rather be training to use weapons than sewing with a needle. Her direwolf is called Nymeria.'},

  { username: 'Sansa_Stark', email: 'sansa@stark.com', password: 'aeghft7q394yty8',
    image_url: 'http://i.imgur.com/aToTLEv.jpg', role: 'Lady', department: 'House Stark',
    about: "Sansa Stark is the first daughter and second child of Eddard and Catelyn Stark. She was also the future bride of Prince Joffrey, and thus the future Queen of the Seven Kingdoms as well. Her direwolf is called Lady, she is the smallest of the pack."},

  { username: 'Samwell_Tarly', email: 'sam@the-wall.com', password: 'awg34t2',
    image_url: 'http://i.imgur.com/MqtcSBP.jpg', role: 'Maester-in-Training', department: 'The Wall',
    about: "Samwell Tarly, the eldest son and former heir of Lord Randyll Tarly, is a new recruit to the Night's Watch. He was sent to the Wall by his father, who disowned him for his cowardice."},

  { username: 'TheonGreyjoy', email: 'theon@iron-islands.com', password: 'aw4y57yag',
    image_url: 'http://i.imgur.com/a0St9jt.jpg', role: 'House Heir', department: 'House Greyjoy',
    about: "Theon Greyjoy is the youngest son of Lord Balon Greyjoy of the Iron Islands. He is the hostage and ward of Lord Eddard Stark, stemming from the failed Greyjoy Rebellion."},

  { username: 'PetyrBaelish', email: 'littlefinger@littlefinger.com', password: '6rkuhdhg',
    image_url: 'http://i.imgur.com/WOqR5Aq.jpg', role: 'Littlefinger', department: 'House Baelish',
    about: "Lord Petyr Baelish, nicknamed 'Littlefinger', is the Master of Coin in King Robert Baratheon's Small Council. He grew up with Catelyn Tully and fought Ned's brother Brandon for her hand. Petyr is a master manipulator who knows the ongoing affairs within the Seven Kingdoms thanks to his spies."},

  { username: 'JorahMormont', email: 'jorah@targaryen-serve.com', password: 'rhfabbag',
    image_url: 'http://i.imgur.com/1Gsd23M.jpg', role: 'Head of Security', department: 'House Targaryen',
    about: "Ser Jorah Mormont is an exiled knight in the service of Daenerys Targaryen and the son of Jeor Mormont of the Night's Watch."},

  { username: 'DavosSeaworth', email: 'davos@seaworth.com', password: 'aerhgiu7y8',
    image_url: 'http://i.imgur.com/pejXPp7.jpg', role: 'Hand of the King', department: 'House Baratheon',
    about: "Ser Davos Seaworth, also known as 'The Onion Knight', is a former smuggler and knight in the service of Stannis Baratheon; he serves as one of Stannis's most trusted advisers. In his smuggling days, he was said to handle a ship at night better than anyone."},

  { username: 'EddardStark', email: 'ned@stark.com', password: '2849tuhg9ui',
    image_url: 'http://i.imgur.com/8m9pdHM.jpg', role: 'Lord of Winterfell', department: 'House Stark',
    about: "Eddard 'Ned' Stark, Lord of Winterfell and Warden of the North, became the Hand of the King after Lord Jon Arryn's death. He is known for his sense of honor and justice. He took part in Robert's Rebellion after his sister Lyanna was kidnapped by Crown Prince Rhaegar Targaryen."},

  { username: 'Tywin_Lannister', email: 'tywin@lannister.com', password: 'erhigy8',
    image_url: 'http://i.imgur.com/lueIrVF.jpg', role: 'Lord of Casterly Rock', department: 'House Lannister',
    about: "Lord of Casterly Rock, Shield of Lannisport and Warden of the West, Tywin is a calculating, ruthless, and controlling man. He is also the former Hand of King Aerys II. He is the father of Cersei, Jaime, and Tyrion."},

  { username: 'Varys', email: 'varys@kingslanding.com', password: 'ajerguhi7y',
    image_url: 'http://i.imgur.com/LmJP3z0.jpg', role: 'The Spider', department: "King's Landing",
    about: "Varys is the Master of Whisperers on the king's small council. He is the Master of Whisperers, the King's foremost spymaster and intelligence agent. He holds no inherited title, castle or lands in Westeros, but is called 'Lord' as a courtesy due to his position on the council, which traditionally is made up of high lords."},

  { username: 'Bronn', email: 'bronn@bronn.com', password: 'ajwiry78',
    image_url: 'http://i.imgur.com/WhmIdUT.jpg', role: 'Sellsword', department: "You Don't Know It",
    about: "Bronn is a sellsword with a sardonic sense of humor."}
])
# USERS TO ADD?
# Kevan Lannisterx
# Shae
# Benjen / Jeor

guest = User.find_by_username('TyrionLannister')
jon = User.find_by_username('JonSnow')
tywin = User.find_by_username('Tywin_Lannister')
cersei = User.find_by_username('CerseiLannister')
jaime = User.find_by_username('JaimeLannister')
bronn = User.find_by_username('Bronn')
littlefinger = User.find_by_username('PetyrBaelish')
ned = User.find_by_username('EddardStark')
varys = User.find_by_username('Varys')
jorah = User.find_by_username('JorahMormont')
dany = User.find_by_username('DaenerysTargaryen')

organizations = Organization.create([
  { name: 'Westeros', owner_id: jon.id }
  ])

org = Organization.find_by_name('Westeros')


# TEAMS
# Lannister Clan
# Small Council
# 'His people' (Bronn, Varys)
# Targaryens
# 'The Real Council?'
# Starks? 'Broken Things'?

teams = Team.create([
  { name: 'Lannisters', owner_id: tywin.id, organization_id: org.id },
  { name: 'Small Council', owner_id: cersei.id, organization_id: org.id },
  { name: 'Meereen', owner_id: dany.id, organization_id: org.id }
  ])

lannisters = Team.find_by_name('Lannisters')
council = Team.find_by_name('Small Council')
meereen = Team.find_by_name('Meereen')

memberships = Membership.create([
  { team_id: lannisters.id, user_id: guest.id },
  { team_id: lannisters.id, user_id: tywin.id },
  { team_id: lannisters.id, user_id: cersei.id },
  { team_id: lannisters.id, user_id: jaime.id },
  { team_id: council.id, user_id: guest.id },
  { team_id: council.id, user_id: cersei.id },
  { team_id: council.id, user_id: jaime.id },
  { team_id: council.id, user_id: littlefinger.id },
  { team_id: council.id, user_id: varys.id },
  { team_id: council.id, user_id: tywin.id },
  { team_id: council.id, user_id: tywin.id },
  { team_id: meereen.id, user_id: dany.id },
  { team_id: meereen.id, user_id: guest.id },
  { team_id: meereen.id, user_id: varys.id },
  { team_id: meereen.id, user_id: jorah.id }
])

# PROJECTS
# Lannisters
  # War
# Small Council
  # 'Tourney Planning'
  # Wedding Arrangements
  # Coronation

projects = Project.create([
  { team_id: lannisters.id, name: "War in the North" },
  { team_id: lannisters.id, name: "Secure King's Landing" },
  { team_id: council.id, name: "Coronation Tournament" },
  { team_id: council.id, name: "Wedding Ceremony" },
  { team_id: council.id, name: "Siege Preparations" }
])

war = Project.find_by_name("War in the North")
secure = Project.find_by_name("Secure King's Landing")
tourney = Project.find_by_name("Coronation Tournament")
wedding = Project.find_by_name("Wedding Ceremony")
siege = Project.find_by_name("Siege Preparations")

tasks = Task.create([
  { project_id: war.id, name: "Capture Edmure Tully", due: DateTime.new(2017, 1, 21), creator_id: tywin.id, assignee_id: jaime.id},
  { project_id: war.id, name: "Hold the River Crossing", due: DateTime.new(2017, 1, 22), creator_id: tywin.id, assignee_id: jaime.id},
  { project_id: war.id, name: "Skin a Deer", creator_id: tywin.id, assignee_id: tywin.id},
  { project_id: war.id, name: "Monitor Baratheon Forces", creator_id: tywin.id},
  { project_id: secure.id, name: "Find Joffrey a Suitable Queen", due: DateTime.new(2017, 1, 29), creator_id: tywin.id, assignee_id: cersei.id},
  { project_id: secure.id, name: "Mentor Joffrey", creator_id: tywin.id, assignee_id: tywin.id},
  { project_id: secure.id, name: "Marry Loras Tyrell", due: DateTime.new(2017, 2, 28), creator_id: tywin.id, assignee_id: cersei.id},
  { project_id: secure.id, name: "Write Letters", creator_id: tywin.id, assignee_id: tywin.id},
  { project_id: secure.id, name: "Sit at Desk", creator_id: tywin.id, assignee_id: tywin.id},
  { project_id: secure.id, name: "Pander to Common People", creator_id: tywin.id},
  { project_id: tourney.id, name: "Secure Funding", creator_id: guest.id, assignee_id: littlefinger.id},
  { project_id: tourney.id, name: "Cost-Benefit Analysis", creator_id: guest.id},
  { project_id: tourney.id, name: "Win the Melee", due: DateTime.new(2017, 2, 14), creator_id: jaime.id, assignee_id: jaime.id},
  { project_id: tourney.id, name: "Oversee Construction", creator_id: guest.id, assignee_id: cersei.id},
  { project_id: tourney.id, name: "Do Varys Things", creator_id: guest.id, assignee_id: varys.id},
  { project_id: wedding.id, name: "Set Budget", creator_id: guest.id},
  { project_id: wedding.id, name: "Oversee Design", creator_id: guest.id, assignee_id: cersei.id},
  { project_id: wedding.id, name: "Negotiate Terms", due: DateTime.new(2017, 1, 25), creator_id: guest.id, assignee_id: tywin.id},
  { project_id: wedding.id, name: "Drink Wine", creator_id: guest.id, assignee_id: guest.id},
  { project_id: wedding.id, name: "Do Varys Things", creator_id: guest.id, assignee_id: varys.id},
  { project_id: siege.id, name: "Design Battle Plan", creator_id: guest.id, assignee_id: guest.id},
  { project_id: siege.id, name: "Rally Troops", due: DateTime.new(2017, 2, 2), creator_id: guest.id, assignee_id: guest.id},
  { project_id: siege.id, name: "Intimidate Sansa", due: DateTime.new(2017, 2, 2), creator_id: guest.id, assignee_id: cersei.id},
  { project_id: siege.id, name: "Show Up Last Minute", due: DateTime.new(2017, 2, 2), creator_id: guest.id, assignee_id: tywin.id},
  { project_id: siege.id, name: "Do Varys Things", creator_id: guest.id, assignee_id: varys.id}
])
