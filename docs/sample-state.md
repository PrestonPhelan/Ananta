```js

{
  session: {
    currentUser: {
      id: 1,
      username: "Employee1",
      image_url: "whatever.png"
    }
    errors: ["Invalid credentials"]
  },

  users: {
    2: {
      id: 2,
      username: "HowdyDewdy",
      image_url: "img.png"
    },

    3: {
      id: 3,
      username: "CowboyCarl"
      image_url: "img.png"
    }
  }

  teams: {
    1: {
      id: 34,
      name: "Team Awesome"
      owner: {
        id: 33
        image_url: "img.png"
      }
      members: {
        267: {
          id: 267,
          image_url: "img.png"
        }

        23: {
          id: 23,
          image_url: "img.png"
        }
      }
    }
  }

  teamDetail: {
    name: "Team Awesome",
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
      },
      2: {
        id: 2,
        name: "Second project",
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
