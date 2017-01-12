# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    |
role            | string    |
department      | string    |
about           | text      |


## organizations

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
image_url       | string    |
owner_id        | integer   | not null, foreign key (references users), indexed


## employees
column name     | data type | details
----------------|-----------|-----------------------
organization_id         | integer   | not null, foreign key (references organizations), indexed
user_id         | integer   | not null, foreign key (references users), indexed


## teams
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
owner_id        | integer   | not null, foreign key (references users), indexed
organization_id | integer   | not null, foreign key (references organizations), indexed


## memberships
column name     | data type | details
----------------|-----------|-----------------------
team_id         | integer   | not null, foreign key (references teams), indexed
user_id         | integer   | not null, foreign key (references users), indexed


## projects
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
archived        | boolean   | not null, default false
color           | string    | (must be in selected list, BONUS)
team_id         | integer   | not null, foreign key (references teams), indexed


## tasks
column name     | data type | details
----------------|-----------|-----------------------
id                   | integer   | not null, primary key
name                 | string    | not null
section              | boolean   | not null, default false
section_id           | integer   | foreign key, (references tasks), indexed
description          | text      |
start                | date      | (BONUS)
due                  | date      |
time                 | integer   |
started              | boolean   | not null, default true
completed            | boolean   | not null, default false
completed_on         | date      |
creator_id           | integer   | not null, foreign key (references users), indexed
worker_id            | integer   | foreign key (references users), indexed
parent_task_id       | integer   | foreign key (references tasks), indexed,  (BONUS)


# Tables For Bonus Features
## project_favorites
column name     | data type | details
----------------|-----------|-----------------------
project_id      | integer   | not null, foreign key (references projects), indexed
user_id         | integer   | not null, foreign key (references users), indexed, unique [project_id]


## task_favorites
column name     | data type | details
----------------|-----------|-----------------------
task_id         | integer   | not null, foreign key (references tasks), indexed
user_id         | integer   | not null, foreign key (references users), indexed, unique [project_id]


## taggings
column name     | data type | details
----------------|-----------|-----------------------
tag_id          | integer   | not null, foreign key (references tags), indexed
task_id         | integer   | not null, foreign key (references tasks), indexed, unique [tag_id]


## tags
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
tag             | string    | not null, indexed, unique


## dependencies (start & complete)
column name     | data type | details
----------------|-----------|-----------------------
depends_on_id    | integer   | foreign key (references tasks), indexed
trigger_task_id  | integer   | foreign key (references tasks), indexed


## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
task_id         | integer   | not null, foreign key (references tasks), indexed
user_id         | integer   | not null, foreign key (references users), indexed


## conversations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
subject         | string    | not null
project_id      | integer   | not null, foreign key (references projects), indexed


## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
content         | text      | not null
user_id         | integer   | not null, foreign key (references users), indexed
conversation_id | integer   | not null, foreign key (references conversations), indexed
