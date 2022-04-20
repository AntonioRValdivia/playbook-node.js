const profile = {
  name: "José Antonio",
  payMethod: "credit card",
  numberTrips: 45,
  getPayment: () =>{
    return `The method of payment is ${profile.payMethod}`
  },
  getTrips: () =>{
    return `The number of trips that he has had is ${profile.numberTrips}`
  }
}

// Pruebas
console.log('The name of the user is: ' + profile.name);
console.log('Método de pago: ' + profile.getPayment());
console.log('Número de viajes: ' + profile.getTrips());

const travel = {
  address: "elm street 19",
  travelTime: 50,
  driver: "Tom",
  getTravelTime: () =>{
    return `The time of the trip is ${travel.travelTime} min`
  },
  getDriverName: () =>{
    return `The name of your driver is ${travel.driver}`
  }
}

// Pruebas
console.log('La dirección del viaje es: ' + travel.address);
console.log('El tiempo del viaje es: ' + travel.getTravelTime());
console.log('El nombre del conductor es: ' + travel.getDriverName());
