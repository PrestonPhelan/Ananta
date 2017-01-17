json.id @project.id
json.name @project.name

json.tasks @project.tasks do |task|
  json.id task.id
  json.name task.name
  json.due task.due
  json.header task.header
  json.completed task.completed
  json.assignee task.assignee do |assignee|
    json.id assignee.id
    json.image_url assignee.image_url
  end
end
