import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onFormSubmit(userForm: NgForm) {
    console.log(userForm);
  }
  resetUserForm(userForm: NgForm){
    userForm.resetForm();
  }

}
