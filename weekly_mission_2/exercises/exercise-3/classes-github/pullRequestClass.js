class PullRequest {
  constructor(title, branchName, dateCreated, stat, 
    repositoryNameAssociated,){
      this.title = title;
      this.branchName = branchName;
      this.dateCreated = dateCreated;
      this.stat = stat;
      this.repositoryNameAssociated = repositoryNameAssociated;
    }
    getStatus(){
      return `The status of the pull request is ${this.stat}`
  }
  getTitleAndAuthor(){
      return `The title of the pull request is ${this.title} and 
      the author ${this.repositoryNameAssociated}`
  }
}


// Instancia de la clase
const pullRequest1 = new PullRequest("Agregar-blog", 
"main", "Jueves 7 de abril", "closed", "LaunchX")

// Pruebas
console.log(pullRequest1.getStatus())
console.log(pullRequest1.getTitleAndAuthor())
