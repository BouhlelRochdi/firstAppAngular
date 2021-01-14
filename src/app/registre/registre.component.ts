import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  constructor() { }
  username;
  lastname;
  email;
  age;
  pwd;
  a = JSON.parse(localStorage.getItem('users')) || [];
  ngOnInit(): void {
  }
  
  
  validateForm(){
    alert (this.username + " " + this.lastname + " " + this.age + " " + this.pwd);
  let user = {
  name:this.username,
  lastname:this.lastname,
  Mail: this.email,
  age: this.age,
  pwd: this.pwd
}
    this.saveDataToLocalStorage(user);
    this.newpage();

 }

 saveDataToLocalStorage(data){
  this.a.push(data);
  localStorage.setItem('users', JSON.stringify(this.a));
 }
 newpage() {
  window.location.replace("http://localhost:4200/login");
}
}
