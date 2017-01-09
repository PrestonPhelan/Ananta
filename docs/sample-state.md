```js

{
  session: {
    currentUser: "Employee1",
    errors: ["Invalid credentials"]
  },

  team: {
    name: "Team Awesome"
    owner: {
      id: 1,
      image_url: "img.png"
    }
    members: {
      4: {
        id: 4,
        image_url: "img.png"
      }
    }

    projects: {
      1: {
        id: 1,
        name: "First project",
        color: RED
      },
      2: {
        id: 2,
        name: "Second project",
        color: BLUE
      }
    }
  }

  projectDetail: {
    id: 1,
    name: "First project",
    tasks: {
      1: {
        id: 1,
        name: "Get started",
        tags: [],
        due: 'Jan 10, 2017',
        header: false,
        completed: false,
        order: 1
      },
      2: {
        id: 2,
        name: "Finish on time",
        tags: [],
        due: 'Jan 20, 2017',
        header: false,
        completed: false,
        order: 2
      }
    }

  },

  taskDetail: {
    id: 1,
    name: "Get started",
    worker_id: null,
    due: null,
    tags: [],
    project: {
      id: 1,
      name: "First project",
      color: RED
    },
    section: {
      id: null,
      name: null
    }
    description: null
  }
}
