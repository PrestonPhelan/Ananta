json.id @task.id
json.name @task.name
json.due @task.due
json.header @task.header
json.completed @task.completed
json.assignee @task.assignee do |assignee|
  json.id assignee.id
  json.image_url assignee.image_url
end
