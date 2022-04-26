class User {
  constructor(name, numberFriends, posts,){
    this.name = name;
    this.numberFriends = numberFriends;
    this.posts = posts;
  }
  getFriends(){
    return `The user ${this.name} has ${user1.numberFriends} friends`
  }
  numberOfPosts(){
    return `The user ${this.name} has ${user1.posts} posts`
  }
}

//Instancia de la clase
const user1 = new User("J Antonio R Valdivia", 
800, 200)

//Pruebas
console.log(user1.getFriends())
console.log(user1.numberOfPosts())