class Bio {
  constructor(userNameBiography, views, photos){
    this.userNameBiography = userNameBiography;
    this.views = views;
    this.photos = photos;
  }
  getViews(){
    return `The biography has ${this.views} views`
  }
  getPhotos(){
    return `The biography has ${this.photos} photos`
  }
}

// Instancia de la clase
const bio1 = new Bio("J Antonio R Valdivia", 20, 10)


// Pruebas
console.log(bio1.getViews())
console.log(bio1.getPhotos())