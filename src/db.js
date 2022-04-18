const users = [
  {
    id: '1',
    name: 'Milad',
    email: 'milad@gmail.com',
    age: 23,
  },
  {
    id: '2',
    name: 'Majd',
    email: 'majd@gmail.com',
  },
  {
    id: '3',
    name: 'Maha',
    email: 'maha@gmail.com',
  },
  {
    id: '4',
    name: 'Mike',
    email: 'mike@gmail.com',
    age: 55,
  },
]

const posts = [
  {
    id: '1',
    title: 'the war of art',
    body: 'asas',
    published: false,
    author: '1',
  },
  {
    id: '2',
    title: 'the art of war',
    body: 'asas',
    published: true,
    author: '1',
  },
  {
    id: '3',
    title: 'the war of war',
    body: 'asas',
    published: true,
    author: '3',
  },
]

const comments = [
  {
    id: '1',
    text: 'yolo',
    author: '1',
    post: '1',
  },
  {
    id: '2',
    text: 'yolo',
    author: '2',
    post: '2',
  },
  {
    id: '3',
    text: 'yolo',
    author: '3',
    post: '3',
  },
  {
    id: '4',
    text: 'yolo',
    author: '4',
    post: '1',
  },
]

const db = {
  users,
  posts,
  comments,
}

export { db as default }
