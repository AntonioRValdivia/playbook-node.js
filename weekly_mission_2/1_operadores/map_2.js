const explorers = ["ANTONIO", "PETER", "FRANK", "RICK"]

const newArr = explorers.map( (explorer) =>{
      return explorer.toLocaleLowerCase().slice(0,4)
})

console.log(newArr)