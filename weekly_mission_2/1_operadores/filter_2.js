const students = [
    { name: 'Harry', age: 21 },
    { name: 'Jenny', age: 17 },
    { name: 'Henry', age: 19 },
    { name: 'Frank', age: 28 },
    { name: 'Karen', age: 25 }
]

const over18 = students.filter( student =>{
  return student.age > 18
})

console.log(over18)