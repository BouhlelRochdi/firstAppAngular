import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  username;
  lastname;
  email;
  age;
  pwd;
  a = JSON.parse(localStorage.getItem('users')) || [];
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
    
  validateForm(){
    // alert (this.username + " " + this.lastname + " " + this.age + " " + this.pwd);
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
  this.router.navigateByUrl("/login");
}
}
