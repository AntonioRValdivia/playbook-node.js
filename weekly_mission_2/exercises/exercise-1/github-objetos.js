const repo = {
  name: "LaunchX",
  author: "AntonioRValdivia",
  language: "JavaScript, HTML, CSS",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function(){
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function(){
    return `This repository ${this.name} was created by ${this.author}`
  }
 }
 
 console.log("Nombre del repo:" + repo.name)
 console.log("Issues totales: " + repo.getTotalIssues())
 console.log(repo.getGeneralInfo())


 const issue = {
    title: "02 Live 2 Semana 1",
    repositoryNameAssociated: "LaunchX",
    stat: "Closed",
    numberOfComments: 108,
    labels: "Semana-1",
    dateCreated: "Lunes 4 de abril",
    lastUpdated: "Miércoles 6 de abril",
    getTitleAndAuthor: function(){
        return `The title of the issue is ${this.title} and the author ${this.repositoryNameAssociated}`
    },
    getGeneralInfo: function(){
        return `The issue ${this.title} has ${this.numberOfComments} comments, was created on 
        ${this.dateCreated} and is ${this.stat}`
    }
 }

 console.log('Nombre del issue: ' + issue.title);
 console.log('Título y autor: ' + issue.getTitleAndAuthor());
 console.log(issue.getGeneralInfo());



 const pullRequest = {
    title: "Agregar-blog",
    branchName: "main",
    dateCreated: "Jueves 7 de abril",
    stat: "closed",
    repositoryNameAssociated: "LaunchX",
    getStatus: function(){
        return `The status of the pull request is ${this.stat}`
    },
    getTitleAndAuthor: function(){
        return `The title of the pull request is ${this.title} and 
        the author ${this.repositoryNameAssociated}`
    }
 }

 console.log(`Nombre del pull request ` + pullRequest.title);
 console.log('Título y autor:' + pullRequest.getTitleAndAuthor());
 console.log(pullRequest.getStatus());
 