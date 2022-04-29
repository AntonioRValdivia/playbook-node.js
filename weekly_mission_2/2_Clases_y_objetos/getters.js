class Avenger {
  constructor(name, codename, superpower){
    this.name = name;
    this.codename = codename;
    this.superpower = superpower;
    this.missionsCompleted = 0;
    this.missionsTodo = 99;
  }
  get getMissionsCompleted(){
    return this.missionsCompleted
  }
}

const avenger1 = new Avenger('Tony Stark', 'Iron-man', 'money')

console.log(avenger1.getMissionsCompleted)