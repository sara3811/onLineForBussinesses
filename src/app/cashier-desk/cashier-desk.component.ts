import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cashier-desk',
  templateUrl: './cashier-desk.component.html',
  styleUrls: ['./cashier-desk.component.scss']
})
export class CashierDeskComponent implements OnInit {
  apiUri = '/customersInTurn'
  serviceId: any;
  nextTurn: any;
  showFiller = false;
  
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.serviceId = +params['id']; // (+) converts string 'id' to a number         
      console.log(this.serviceId);
      this.http.get(environment.apiUrl + this.apiUri + "/" + this.serviceId).subscribe((turn => {
        this.nextTurn = turn;
        console.log(this.nextTurn);
      }), (error => {
        Swal.fire('Oops...', error.error.Message, 'error')
      })

      )
    });
  }


}
