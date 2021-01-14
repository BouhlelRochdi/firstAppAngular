import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  Cuser = JSON.parse(localStorage.getItem('userConnect')) ;
  constructor() { }
  

  ngOnInit(): void {
  
     document.getElementById('usr').innerHTML= "welcome home : " + this.Cuser.username;
  
  }
displaydata(){
  alert(this.Cuser.username + "  " + this.Cuser.password);
  localStorage.removeItem('userConnect');
  
}


}
