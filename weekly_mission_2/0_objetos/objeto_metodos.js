console.log("Obj. con métodos")

const myPlace = {
  type: "flat",
  number: 16,
  songPlaying: "Californication",
  playMusic: () => {
    console.log(`Playing ${this.songPlaying}`)
  }
}

myPlace.playMusic();
