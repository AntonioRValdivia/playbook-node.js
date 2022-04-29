class Student {
  constructor(name, age, skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
  }
  sayHello(){
    console.log(`Hi my name is ${this.name} and I´m ${this.age}`)
  }
}

const student1 = new Student('Antonio', 28, ['javascript', 'python'])
student1.sayHello()