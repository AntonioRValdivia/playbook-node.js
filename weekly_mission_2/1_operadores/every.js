const randomNumbers = [89, 5, 809, 3, 7]

const underAThousand = randomNumbers.every( number =>{
    return number < 1000
})

console.log('All the numbers are under 1000: ' + underAThousand)