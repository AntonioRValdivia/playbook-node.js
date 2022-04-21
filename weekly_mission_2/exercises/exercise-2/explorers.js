const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
 ]


 // 1. Imprime el nombre de cada explorer

explorers.forEach(explorer => console.log(explorer.name));

// 2. Imprime el stack de cada explorer, usa FOR EACH

explorers.forEach(explorer => 
  console.log(explorer.name + ' y su stack: ' + explorer.stack));

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP

stacks = [];
explorers.map(explorer => stacks.push(explorer.stack));
console.log(stacks);

// 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER
// (para validar un elemento en un lista se usa el método includes)


const jsDevs = explorers.filter(explorer => explorer.stack.includes('js'));
console.log('Los explores que saben js son: ');
jsDevs.forEach(explorer => console.log(explorer.name));


// 5. Busca el primer explorer que sea de la CDMX, usa FIND

const found = explorers.find(explorer => explorer.city = "CDMX" );
console.log('El explorer que vive en CDMX es ' + found.name);

// 6. Obtén la suma de todos los exercises_completed, usa REDUCE

let ejerciciosCompletos = [];
explorers.forEach(explorer => ejerciciosCompletos.push(explorer.exercises_completed))
console.log(ejerciciosCompletos);

sumaEjerciciosCompletos = ejerciciosCompletos.reduce(function(valorAnterior, valorActual, indice, vector){
  return valorAnterior + valorActual;
});

console.log('la suma de ejercicios ' + sumaEjerciciosCompletos)


// 7. Obtén la validación si al menos uno de los explorers tiene la propiedad
// exercisesFinished en frontend como true, usa SOME

const validation = [];
explorers.forEach( explorer => validation.push(explorer.missions.frontend.isFinished) )
const terminada = (element) => element == true
console.log(validation.some(terminada))

// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true.
// Usa EVERY.

const validation2 = [];
explorers.forEach( explorer => validation2.push(explorer.missions.onboarding.isFinished) )
const terminada2 = (element) => element == true
console.log(validation2.every(terminada2))


