// exports a class default
export default class MyPokemon {
  constructor (name) {
    this.name = name
  }

  sayHello () {
    console.log(`Mi Pokemon ${this.name} te saluda!!!`)
  }

  sayMessage (message) {
    console.log(`${message}`)
  }
}