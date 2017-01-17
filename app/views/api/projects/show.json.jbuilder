json.id @team.id
json.name @team.name

json.tasks @team.tasks do |project|
  json.id project.id
  json.name project.name
  json.due project.due
  json.header project.header
  json.completed project.completed
  json.order project.order
end
