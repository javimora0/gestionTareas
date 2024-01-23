import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {env} from "../../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {
  }

  private urlLogin: string = env.URL + 'api/login'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' as 'response'
  };
  login(body: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.urlLogin, body, this.httpOptions);
  }
}
