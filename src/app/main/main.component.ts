import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {userSessionStorage} from "../interfaces/login-interface";
import {ModalInicioSesionComponent} from "../modal-inicio-sesion/modal-inicio-sesion.component";
import {CrearTareaComponent} from "../crear-tarea/crear-tarea.component";
import {ModificarTareaComponent} from "../modificar-tarea/modificar-tarea.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    ModalInicioSesionComponent,
    CrearTareaComponent,
    ModificarTareaComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  usuario: userSessionStorage = {id: 0, token: "", rol: ""}
  login = true
  crearTarea = false
  modificarTarea = false
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      this.usuario = JSON.parse(usuarioAlmacenado) as userSessionStorage;
    } else {
      this.login = false
    }
  }

  crearTareaAbrir() {
    this.crearTarea = true
  }

  modificarTareaAbrir() {
    this.modificarTarea = true
  }

  manejarDatoRecibido(dato: boolean) {
    this.crearTarea = dato
  }
  manejarDato(dato: boolean) {
    this.modificarTarea = dato
  }
}
