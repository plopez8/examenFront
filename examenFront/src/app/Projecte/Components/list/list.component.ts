import { Component, OnInit } from '@angular/core';
import { catchError, Subscription, take, throwError } from 'rxjs';
import { listApi } from '../../Serveis/Api/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  imatges!: Array<any>
  error!: string;
  data!: Array<any>;
  a = "hola";

  constructor(private httpClient: listApi) {
  }
  ngOnInit(): void {
    this.getImatges();
  }

  getImatges() {
      this.httpClient.getImatges().pipe(
        take(1),
        catchError((err: any) => {
          return throwError(() => new Error("Error al agafar imatge"))
        })
      ).subscribe({
        next: (x) => {
          console.log(x);
          this.imatges = x;
          console.log(this.imatges);
          this.data = this.imatges;
        },
        error: (err: any) => {
          console.log(err.message)
        },
        complete: () => {},
      })
  }

}
