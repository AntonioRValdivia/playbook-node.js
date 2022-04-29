const randomArr = [2, 2.4, 'perro', 79834, 'a,', 987234.5]

const firstString = randomArr.find( element =>{
    return typeof element === 'string'
})

console.log('El primer string del arreglo es: ' + firstString)

