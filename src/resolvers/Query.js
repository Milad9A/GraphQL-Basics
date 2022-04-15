const Query = {
  users(parent, args, { db }, into) {
    if (!args.query) {
      return db.users
    } else {
      return db.users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase())
      })
    }
  },

  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts
    } else {
      return db.posts.filter((post) => {
        return (
          post.body.toLowerCase().includes(args.query.toLowerCase()) ||
          post.title.toLowerCase().includes(args.query.toLowerCase())
        )
      })
    }
  },
  comments(parent, args, { db }, info) {
    return db.comments
  },
  me() {
    return {
      id: '3432411212',
      name: 'Milad Awad',
      email: 'milad@gmail.com',
      age: 23
    }
  },
  post() {
    return {
      id: '42432233',
      title: 'fasfafdf',
      body: 'rewrwer',
      published: false
    }
  }
}

export { Query as default }
