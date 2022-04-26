class Profile {
  constructor(name, paymentMethod, numberTrips){
    this.name = name;
    this.paymentMethod = paymentMethod;
    this.numberTrips = numberTrips;
  }
  getPayment(){
    return `The method of payment is ${this.paymentMethod}`
  }
  getTrips(){
    return `The number of trips that he has had is ${this.numberTrips}`
  }
}

// Instancia de la clase
const profile1 = new Profile("José Antonio", "credit card",
45)

// Pruebas
console.log(profile1.getPayment())
console.log(profile1.getTrips())