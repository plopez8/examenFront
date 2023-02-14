import { Component, OnInit } from '@angular/core';
import { catchError, Subscription, take, throwError } from 'rxjs';
import { listApi } from '../../Serveis/Api/list';

@Component({
  selector: 'app-llista-superior',
  templateUrl: './llista-superior.component.html',
  styleUrls: ['./llista-superior.component.css']
})
export class LlistaSuperiorComponent implements OnInit{
  ngOnInit(): void {

  }

}
