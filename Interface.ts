interface Author {
  name: string ,
  genre: string;
}

interface Post {
  id: number;
  name: string;
  volume: number;
  price: number;
  image: string;
  date: Date;
  author: Author;
}

const newPost: Post = {
  id: 10,
  name: "nuxt10",
  volume: 123,
  price: 1000,
  image: "assets/image25.jpg",
  date: new Date(),
  author:{name:'ruby', genre:'middle-east'}
};

function databaseRead(value: Post) {
  return value.author.name;
}

console.log(databaseRead(newPost));
