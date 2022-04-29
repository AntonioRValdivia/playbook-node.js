const grades = [
    {name: 'Antonio', score: 10},
    {name: 'Henry', score: 5},
    {name: 'Marc', score: 9},
    {name: 'Adam', score: 7}
]

const underSix = grades.find( student =>{
  return student.score < 6
})

console.log('This student didn´t approved: ' + underSix.name)