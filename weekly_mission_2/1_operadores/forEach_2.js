console.log("Ejercicio 2: Imprimiendo a los explorers")
const explorers = [
  {
    name: "Antonio",
    mail: "antoniovaldivia93@outlook.com",
    direccion: "Nacional st",
    videogames: [
      "Xbox",
      "ps4"
    ]
  },
  {
    name: "Peter",
    mail: "peter3@outlook.com",
    direccion: "west st",
    videogames: [
      "gameboy",
      "ps5"
    ]
  },
  {
    name: "Marco",
    mail: "marco93@outlook.com",
    direccion: "Serapio st",
    videogames: [
      "Xbox one",
      "switch"
    ]
  }
]

explorers.forEach(explorer => 
  console.log(explorer.name + ' y sus videojuegos: ' + explorer.videogames));

