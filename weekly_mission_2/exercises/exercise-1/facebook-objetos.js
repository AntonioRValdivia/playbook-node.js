const user = {
  name: "J Antonio R Valdivia",
  numberFriends: 800,
  posts: 200,
  getFriends: () =>{
    return `The user ${user.name} has ${user.numberFriends}`
  },
  numberOfPosts: () =>{
    return `The user ${user.name} has ${user.posts}`
  }
}

// Pruebas
console.log('El nombre del usuario es ' + user.name);
console.log('Número de amigos: ' + user.getFriends() + ' friends');
console.log('Número de posts: ' + user.numberOfPosts() + ' posts');


const post = {
  postName: "programmer life",
  likes: 25,
  shares: 2,
  getLikes: () =>{
    return `The post has ${post.likes} likes`
  },
  getShares: () =>{
    return `The post has ${post.shares} shares`
  }
}

// Pruebas
console.log('El nombre del post es ' + post.postName);
console.log('Número de likes: ' + post.getLikes());
console.log('Número de shares: ' + post.getShares());



const biography = {
    userNameBiography: "J Antonio R Valdivia",
    views: 20,
    photos: 10,
    getViews: () =>{
      return `The biography has ${biography.views} views`
    },
    getPhotos: () =>{
      return `The biography has ${biography.photos} photos`
    }
}

// Pruebas
console.log('El nombre del usuario de la biografía es: ' + biography.userNameBiography);
console.log('Número de vistas: ' + biography.getViews());
console.log('Número de fotos: ' + biography.getPhotos());
