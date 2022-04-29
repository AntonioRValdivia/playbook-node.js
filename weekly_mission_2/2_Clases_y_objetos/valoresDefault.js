class User {
  constructor(name, username, lastTweet){
    this.name = name;
    this.username = username;
    this.lastTweet = lastTweet;
    this.lastTweetDate = new Date();
    this.account = 'Premium'
  }
  sayHi(){
    console.log(`Hi my username is ${this.username} my account is premium and my last tweet was on ${this.lastTweetDate}`)
  }
}

const user1 = new User('Tony', 'Tony Soprano', 'Hello world!')

user1.sayHi()