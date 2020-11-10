import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-business-register',
  templateUrl: './business-register.component.html',
  styleUrls: ['./business-register.component.scss']
})
export class BusinessRegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = false;
  activityTimes: any[];


  hide1 = true;
  hide2 = true;
  hide3 = true;
  hide4 = true;

  constructor(private _formBuilder: FormBuilder) { }
  days = new FormControl();

  daysList: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      businessName: new FormControl(),
      adress_street:new FormControl(),
      adress_num:new FormControl(),
      adress_city:new FormControl(),
      password:new FormControl(),
      adminPassword:new FormControl()
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    /*this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });*/
  }

  confirmFirstStep() {
   // console.log("busines details:", this.businessName,this.adress_street,this.adress_num,this.adress_street,this.password,this.adminPassword)
   console.log(this.firstFormGroup)
  }

  saveBusiness() {

  }

  addActivityTime() {

  }
}
