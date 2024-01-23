import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioCompartidoService {

  private mensajeSource = new BehaviorSubject<any>(null);
  itemActual = this.mensajeSource.asObservable();

  cambiarItem(item: any) {
    this.mensajeSource.next(item);
  }
}
