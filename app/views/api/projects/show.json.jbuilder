json.id @project.id
json.name @project.name

json.tasks @project.tasks do |task|
  json.id task.id
  json.name task.name
  json.due task.due
  json.header task.header
  json.completed task.completed
  json.assignee do
    if task.assignee
      json.id task.assignee.id
      json.image_url task.assignee.image_url
    else
      json.null!
    end
  end
end
