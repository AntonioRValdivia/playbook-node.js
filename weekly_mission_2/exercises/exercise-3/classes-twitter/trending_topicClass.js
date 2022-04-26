class Trending_Topic{
  constructor(trending_name, country, number_tweets,
    ranking){
      this.trending_name = trending_name;
      this.country = country;
      this.number_tweets = number_tweets;
      this.ranking = ranking;
  }
  getName(){
    return `The hash of the trending is ${this.trending_name}`
  }
  numberTweets(){
      return `Number of tweets: ${this.number_tweets}`
  }
}

// Instancia de la clase
const trending1 = new Trending_Topic("420day",
"mundial", 61800, 6)

// Pruebas
console.log(trending1.getName())
console.log(trending1.numberTweets())