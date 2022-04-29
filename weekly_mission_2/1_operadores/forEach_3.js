console.log("Ejercicio 3: imprimiendo países")

const countries = [
  {
    name: "Mexico",
    population: 6728746,
    dishes: [
      "Tortas ahogadas",
      "Chiles en nogada",
      "Enchiladas"
    ]
  },
  {
    name: "United States",
    population: 672874667,
    dishes: [
      "Cheese Burger",
      "Hot dog",
      "Hot cakes"
    ]
  },
  {
    name: "Finland",
    population: 6728,
    dishes: [
      "Creamy salmon soup.",
      "Classic Finnish rye bread.",
      "Blood dumpling soup."
    ]
  },
]

countries.forEach(country =>
  console.log(`The country ${country.name}, it´s population is ${country.population} and their dishes ${country.dishes}`))