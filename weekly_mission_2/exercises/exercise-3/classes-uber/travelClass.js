class Travel {
  constructor(address, travelTime, driver){
    this.address = address;
    this.travelTime = travelTime;
    this.driver = driver;
  }
  getTravelTime(){
    return `The time of the trip is ${this.travelTime} min`
  }
  getDriverName(){
    return `The name of your driver is ${this.driver}`
  }  
}

// Instancia de la clase
const travel1 = new Travel("elm street 19", 50, "Tom")

// Pruebas
console.log(travel1.getTravelTime())
console.log(travel1.getDriverName())