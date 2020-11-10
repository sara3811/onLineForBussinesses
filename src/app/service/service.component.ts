import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent implements OnInit {

  myControl = new FormControl();
  options;
  filteredOptions: Observable<string[]>;
  apiUri = '/categories';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadCategories();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


  loadCategories() {
    this.http.get(environment.apiUrl + this.apiUri).subscribe((categories: any[]) => {
      this.options = categories;
      console.log('categoriesOption', this.options);
    });
  }
}
