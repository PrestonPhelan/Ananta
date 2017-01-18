json.id @team.id
json.name @team.name

json.members @team.members do |member|
  json.id member.id
  json.image_url member.image_url
  json.username member.username
end

json.projects @team.projects do |project|
  json.id project.id
  json.name project.name
end
