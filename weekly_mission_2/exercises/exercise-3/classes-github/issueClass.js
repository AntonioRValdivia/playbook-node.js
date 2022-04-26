class Issue {
  constructor(title, repositoryNameAssociated, 
    stat, numberOfComments, labels, dateCreated,
    lastUpdated){
      this.title = title;
      this.repositoryNameAssociated = repositoryNameAssociated;
      this.stat = stat;
      this.numberOfComments = numberOfComments;
      this.labels = labels;
      this.dateCreated = dateCreated;
      this.lastUpdated = lastUpdated;
    }
    getTitleAndAuthor(){
      return `The title of the issue is ${this.title} and the author ${this.repositoryNameAssociated}`
  }
  getGeneralInfo(){
      return `The issue ${this.title} has ${this.numberOfComments} comments, was created on 
      ${this.dateCreated} and is ${this.stat}`
  }
}


// Instancia de la clase
const issue1 = new Issue("02 Live 2 Semana 1", 
"LaunchX", "Closed", 108, "Semana-1",
"Lunes 4 de abril", "Miércoles 6 de abril" )

// Pruebas
console.log('Título y autor: ' + issue1.getTitleAndAuthor());
console.log(issue1.getGeneralInfo());