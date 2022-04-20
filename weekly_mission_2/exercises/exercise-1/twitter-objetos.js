const user = {
    user: "WikiLeaks",
    username: "wikileaks",
    bio: "Securely submit leaks: http://wikileaks.org/#submit",
    user_since: "octubre de 2008",
    number_followers: 5600000,
    number_following: 7451,
    last_tweet: "If Assange is extradited, no journalist in the world is safe",
    //functions
    getInfo: () =>{
        return `The username is ${user.user} and has ${user.number_followers} followers`
    },
    lastTweet: () =>{
        return user.last_tweet
    }
}

console.log('Nombre del usuario: ' + user.user);
console.log('Datos del usuario: ' + user.getInfo());
console.log('Last tweet: ' + user.lastTweet());




const trending_topic = {
    trending_name: "#420day",
    country: "mundial",
    number_tweets: 61800,
    ranking: 6,
    //functions
    getName: () =>{
        return `The hash of the trending is ${trending_topic.trending_name}`
    },
    numberTweets: () =>{
        return `Number of tweets: ${trending_topic.number_tweets}`
    }
}

console.log('Nombre del hashtag: ' + trending_topic.getName());
console.log(trending_topic.numberTweets());



const hashtag = {
    hashtag_name: "chears",
    number_tweets: 25000,
    country_more_tweets: "Estados Unidos",
    //functions
    hashName: () =>{
        return hashtag.hashtag_name
    },
    popularIn: () =>{
       return `The country that´s more using it ${hashtag.country_more_tweets}`
    }
}

console.log('Nombre del hash: ' + hashtag.hashName());
console.log('Es popular en: ' + hashtag.popularIn());


