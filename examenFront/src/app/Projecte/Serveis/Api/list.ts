import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
        providedIn: "root"
})

export class listApi {
    constructor(private http:HttpClient){}
    getImatges():Observable<any>{
        return this.http.post("https://api.artic.edu/api/v1/artworks","{}");
    }
}
