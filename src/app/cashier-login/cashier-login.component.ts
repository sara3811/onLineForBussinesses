import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cashier-login',
  templateUrl: './cashier-login.component.html',
  styleUrls: ['./cashier-login.component.scss']
})
export class CashierLoginComponent implements OnInit {
  myControl = new FormControl();
  businesses: any[];
  filteredbusinesses: Observable<any[]>;
  apiUri = '/businesses';
  selectedBusiness: any;
  selectedService:any;
  selectedValue: string;
  selectedCar: string;

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.loadBusinesses();
  }

  private _filter(value: any): any[] {
    console.log(this.filteredbusinesses);
    console.log(this.myControl.value);
    if (typeof (value) === 'string') {
      const filterValue = value.toLowerCase();
      return this.businesses.filter(option => option.BusinessName.toLowerCase().indexOf(filterValue) === 0);
    }

    this.selectedBusiness = value;
    this.myControl.setValue(value.BusinessName);
    const filterValue = value.BusinessName.toLowerCase();
    return this.businesses.filter(option => option.BusinessName.toLowerCase().indexOf(filterValue) === 0);


  }

  loadBusinesses() {
    this.http.get(environment.apiUrl + this.apiUri).subscribe((businesses: any[]) => {
      this.businesses = businesses;
      console.log('businesses', this.businesses);
      this.filteredbusinesses = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }
}
