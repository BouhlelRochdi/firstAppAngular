import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  addTodoForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addTodoForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('')
    });
  }

  save(){
    console.log(this.addTodoForm.value);
    
  }

}
