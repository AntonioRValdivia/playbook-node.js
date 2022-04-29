class Transport {
  constructor(model, horsepower, color){
    this.model = model;
    this.horsepower = horsepower;
    this.color = color;
  }
  get getModel(){
    return this.getModel
  }
}

const myTransport1 = new Transport('series 5', 586, 'black')
console.log(myTransport1)

class Car extends Transport{
}

const myCar1 = new Car('series 5', 586, 'black')
console.log(myCar1)
