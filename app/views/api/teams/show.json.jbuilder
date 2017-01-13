
json.id @team.id
json.name @team.name

json.owner @team.owner do
  json.id owner.id
  json.image_url owner.image_url
end

json.members @team.members do |member|
  json.id member.id
  json.image_url member.image_url
end
