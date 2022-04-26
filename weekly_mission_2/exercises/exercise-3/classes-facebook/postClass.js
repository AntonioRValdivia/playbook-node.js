class Post {
  constructor(postName, likes, shares){
    this.postName = postName;
    this.likes = likes;
    this.shares = shares;
  }
  getLikes(){
    return `The post has ${this.likes} likes`
  }
  getShares(){
    return `The post has ${this.shares} shares`
  }
}

// Instancia de la clase
const post1 = new Post("Programmer life", 25,2)

// Pruebas
console.log(post1.getLikes())
console.log(post1.getShares())