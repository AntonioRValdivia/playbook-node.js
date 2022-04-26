console.log("Obj. que recibe parámetros")

const myRobot = {
  name: "R2-D2",
  sayHello: (yourName) =>{
    console.log(`Hello ${yourName}, my name is ${this.name}`)
  }
}

myRobot.sayHello("Toño")

