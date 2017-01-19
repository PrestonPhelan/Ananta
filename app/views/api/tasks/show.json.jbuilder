json.extract! @task, :id, :name, :due, :time, :completed, :description
if @task.assignee
  json.assignee do
    json.id @task.assignee.id
    json.username @task.assignee.username
    json.image_url @task.assignee.image_url
  end
end
