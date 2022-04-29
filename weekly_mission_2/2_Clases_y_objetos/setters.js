class DigiDestined {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.digimonName = 'Agumon';
    this.digivice = 'model 02'
  }

  get getDigimonName(){
    return this.digimonName;
  }

  get getdigivice(){
    return this.digivice
  }

  set setDigimonName(digimonName){
     this.digimonName = digimonName
  }

  set setDigivice(digivice){
     this.digivice = digivice
  }
}

const digidestined1 = new DigiDestined('Matt', 21 )

// watching the default data
console.log(digidestined1.getDigimonName)
console.log(digidestined1.getdigivice)

// setting new data
digidestined1.setDigimonName = 'Gabumon'
digidestined1.setDigivice = 'Model 01'

console.log(digidestined1.getDigimonName)
console.log(digidestined1.getdigivice)

