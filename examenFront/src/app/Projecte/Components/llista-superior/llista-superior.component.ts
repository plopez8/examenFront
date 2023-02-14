import { Component, OnInit } from '@angular/core';
import { catchError, Subscription, take, throwError } from 'rxjs';
import { listApi } from '../../Serveis/Api/list';

@Component({
  selector: 'app-llista-superior',
  templateUrl: './llista-superior.component.html',
  styleUrls: ['./llista-superior.component.css']
})
export class LlistaSuperiorComponent implements OnInit{
  imatges!: Array<any>
  error!: string;
  data!: Array<any>;


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
          this.imatges = x;
          console.log(this.imatges);
          this.data = this.imatges;
          console.log(this.data);
        },
        error: (err: any) => {
          console.log(err.message)
        },
        complete: () => {},
      })
  }
}
