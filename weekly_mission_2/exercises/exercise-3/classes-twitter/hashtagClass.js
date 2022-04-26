class Hashtag {
  constructor(hashtag_name, number_tweets,
    country_more_tweets){
      this.hashtag_name = hashtag_name;
      this.number_tweets = number_tweets;
      this.country_more_tweets = country_more_tweets;
  }
  hashName(){
    return `The name of the hash is ${this.hashtag_name}`
  }
  popularIn(){
     return `The country that´s more using it ${this.country_more_tweets}`
  }
}

// Instancia de la clase
const hashtag1 = new Hashtag("chears", 25000, 
"Estados Unidos")

// Pruebas
console.log(hashtag1.hashName())
console.log(hashtag1.popularIn())