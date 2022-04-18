class Pokemon {
  constructor(name) {
    this.name = name 
  }
  
  sayHello () {
    console.log(`Mi Pokemon ${this.name} te saluda!!!`)
  }

  sayMessage (message) {
    console.log(`${message}`)
  }
}

// Esta clase se exporta en este módulo
module.exports = Pokemon