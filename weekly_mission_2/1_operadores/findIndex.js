const cars = ['Mercedes', 'BMW', 'Alfa Romeo', 'GMC']

const sevenWords = cars.findIndex( car =>{
    return car.length > 7
})

console.log('The index of the carname with more than seven words is: ' + sevenWords)