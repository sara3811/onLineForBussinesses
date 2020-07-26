import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //@Input() error: string | null;

 // @Output() submitEM = new EventEmitter();
 form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() { }
 

  ngOnInit(): void {
  }
 
 
  submit() {
   
    if (this.form.valid) {
      //קריאה לשרת לבדוק אם הוא משתמש רשום ואם לא:
     
      console.log(this.form);
    }
  }

}
