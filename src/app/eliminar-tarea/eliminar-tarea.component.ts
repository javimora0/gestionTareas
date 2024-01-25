import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {userSessionStorage} from "../interfaces/login-interface";
import {ServicioTareasService} from "../services/tareas/servicio-tareas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-eliminar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './eliminar-tarea.component.html',
  styleUrl: './eliminar-tarea.component.css'
})
export class EliminarTareaComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  realizadas() {
    this.router.navigate(['main/consultas/tareas/realizadas'])
  }
  ranking() {
    this.router.navigate(['main/consultas/ranking'])
  }

  incompletas() {
    this.router.navigate(['main/consultas/tareas/incompletas'])
  }

  unProgramador(){
    this.router.navigate(['main/consultas/tareas/tarea'])
  }
  cerrar() {
    this.router.navigate(['main'])
  }
}
