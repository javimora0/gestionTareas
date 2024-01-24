import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {env} from "../../../environments/environment.development";
import {Observable} from "rxjs";
import {Tarea, TareaGet, tareaPost} from "../../interfaces/tarea-interface";
import {FormControl, ɵValue} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ServicioTareasService {

  constructor(private http: HttpClient) {
  }

  private url: string = env.URL + 'admin/task'


  getTareas(token: string): Observable<HttpResponse<TareaGet>> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token
      }),
      observe: 'response' as 'response'
    };
    return this.http.get<TareaGet>(this.url, httpOptions)
  }

  postTareas(token: string, body: tareaPost): Observable<HttpResponse<any>> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token': token
      }),
      observe: 'response' as 'response'
    };
    return this.http.post<tareaPost>(this.url, body, httpOptions)
  }

  getTarea(token: string, idTarea: string | null): Observable<HttpResponse<Tarea>> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token': token
      }),
      observe: 'response' as 'response'
    };
    return this.http.get<Tarea>(this.url +'/' +idTarea, httpOptions)
  }

  postTarea(token: string, idTarea: string | null, body: Tarea): Observable<HttpResponse<any>> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token': token
      }),
      observe: 'response' as 'response'
    };
    return this.http.put(this.url + '/' + idTarea, body,httpOptions)
  }
}
