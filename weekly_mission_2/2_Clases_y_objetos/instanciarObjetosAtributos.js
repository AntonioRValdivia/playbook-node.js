class Car {
  constructor(brand, model, horsepower, year){
    this.brand = brand;
    this.model = model;
    this.horsepower = horsepower;
    this.year = year;
  }
}

const myCar = new Car('Mercedez', 'Clase S', 340, 2021)
console.log('Instancia de una clase con atributos')
console.log(myCar)