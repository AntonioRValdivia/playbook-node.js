class User {
  constructor(user, username, bio, user_since,
    number_followers, number_following, last_tweet){
      this.user = user;
      this.username = username;
      this.bio = bio;
      this.user_since = user_since;
      this.number_followers = number_followers;
      this.number_following = number_following;
      this.last_tweet = last_tweet;
    }
    getInfo(){
      return `The username is ${this.user} and has ${this.number_followers} followers`
  }
    lastTweet(){
        return this.last_tweet
    }
}

// Instancia de la clase
const user1 = new User("Wikileaks", "wikileaks",
 "Securely submit leaks: http://wikileaks.org/#submit",
 "octubre de 2008", 5600000, 7451, "If Assange is extradited, no journalist in the world is safe" )

// Pruebas
console.log(user1.getInfo())
console.log(user1.lastTweet())