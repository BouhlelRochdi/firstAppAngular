import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';

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
      name: new FormControl('', [Validators.required, Validators.minLength(8)]),
      description: new FormControl('',[Validators.required, Validators.minLength(8)])
    });
    
  }
 
  save(){
    console.log(this.addTodoForm.value);
    console.log(this.addTodoForm.controls);
}
nameError() {

  const name = this.addTodoForm.controls.name;

  return name.touched && name.hasError('required');

}
descriptionError() {

  const description = this.addTodoForm.controls.description;

  return description.touched && description.hasError('required');

}

    
  }
