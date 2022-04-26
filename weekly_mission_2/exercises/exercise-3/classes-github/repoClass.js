class Repo {
  constructor(name, author, language, 
    numberOfCommits, stars, forks, issues_open, 
    issues_close){
      this.name = name;
      this.author = author;
      this.language = language;
      this.numberOfCommits = numberOfCommits;
      this.stars = stars;
      this.forks = forks;
      this.issues_open = issues_open;
      this.issues_close = issues_close;
    }
    getTotalIssues(){
      return this.issues_open + this.issues_close
    }
    getGeneralInfo(){
      return `This repositorie´s name is ${this.name} and was created by ${this.author}`
    }
}

const repo1 = new Repo("LaunchX", 
  "AntonioRvaldivia", "JavaScript, HTML, CSS",
  100, 199, 299, 10, 10);


// Pruebas
console.log(`Total issues: ${repo1.getTotalIssues()}`)
console.log(repo1.getGeneralInfo())
