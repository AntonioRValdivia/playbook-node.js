const objects = [
  { name: 'shelf', age: 150 },
  { name: 'mirror', age: 50 },
  { name: 'bycicle', age: 100 },
  { name: 'watch', age: 22 },
]

objects.sort((a, b) => { // podemos invocar una función
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
console.log(objects) // sorted ascending