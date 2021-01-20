import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  users = JSON.parse(localStorage.getItem('users')) || [];

  constructor() { }
  
  ngOnInit(): void {
  }
  editUser(i){
var choice = prompt("Si vous Voulez chager quelque chose Tapez O sinon tapez N");
if (choice == "o"){
    var editBlock = prompt("taper le champs a modifier");
    switch(editBlock){
      case "Name":{
        let n = prompt("Name:  ..");
        this.users[i].name = n;
      } 
      case "Last Name":{
        let n = prompt("Last Name:  ..");
        this.users[i].lastname = n;
      } 
      case "Age":{
        let n = prompt("Age:  ..");
        this.users[i].age = n;
      }
      case "E-mail":{
        let n = prompt("Email:  ..");
        this.users[i].Mail = n;
      }
    }
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  
 else 
 alert ("Votre choix ete Non .. A++");
    // modifier l'utilisateur ayant l'index i
    // sans oublier de l'enregistrer dans le localstorage 
  }
  deleteUser(i){
    // detele l'utilisateur ayant l'index i
    
    this.users.splice(i,1);
    // sans oublier de l'enregistrer dans le localstorage 
    localStorage.setItem('users', JSON.stringify(this.users));

  }

}
