@teams.each do |team|
  json.set! team.id do
    json.id team.id
    json.name team.name

    json.owner do
      json.id team.owner.id
      json.image_url team.owner.image_url
    end

    json.members team.members do |member|
      json.id member.id
      json.image_url member.image_url
    end
  end
end
