console.log("Creando un objeto con parámetros");

const myMethods = {

  sayHello: () => {
    console.log("Hola mundo");
  },
  sayName: () => {
    console.log("My name is Antonio");
  },
  ingreseEdad: (age) => {
    console.log(`Tengo ${age} años`);
  }
}

console.log(myMethods);
myMethods.sayHello();
myMethods.sayName();
myMethods.ingreseEdad(28);