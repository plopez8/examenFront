import { Component, OnInit } from '@angular/core';
import { catchError, Subscription, take, throwError } from 'rxjs';
import { guardiaApi } from '../../Serveis/Api/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  guardies!: Array<any>
  error!: string;
  subscriptions!: Subscription[];
  data!: Array<any>;

  constructor(private httpClient: guardiaApi) {
    this.subscriptions = new Array<Subscription>();
  }
  ngOnInit(): void {
    this.getGuardiesTreballador(localStorage.getItem("usuari")!)
  }

  getGuardies() {
      this.httpClient.getGuardies().pipe(
        take(1),
        catchError((err: any) => {
          return throwError(() => new Error("Error al agafar guardia"))
        })
      ).subscribe({
        next: (x) => {
          this.guardies = x;
        },
        error: (err: any) => {
          console.log(err.message)
        },
        complete: () => {},
      })
  }

}
