import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {env} from "../../../environments/environment.development";
import {Observable} from "rxjs";
import {UserGet} from "../../interfaces/usuario-interface";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient ) { }
  private url: string = env.URL


  getUsuarios(token: string): Observable<HttpResponse<UserGet>> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token
      }),
      observe: 'response' as 'response'
    };
    return this.http.get<UserGet>(this.url + 'admin/user',httpOptions)
  }

  getRanking(token: string): Observable<HttpResponse<any>> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token
      }),
      observe: 'response' as 'response'
    };
    return this.http.get<any>(this.url + 'user/ranking',httpOptions)
  }
}
