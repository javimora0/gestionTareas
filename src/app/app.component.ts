import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ServicioCompartidoService} from "./services/compartido/servicio-compartido.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  logeado: boolean = true
  nombre: any

  constructor(private servicioCompartido: ServicioCompartidoService) {
    this.servicioCompartido.itemActual.subscribe(mensaje => this.nombre = mensaje);
  }


}
