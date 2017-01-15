@projects.each do |project|
  json.set! project.id do
    json.id project.id
    json.name project.name
  end
end
