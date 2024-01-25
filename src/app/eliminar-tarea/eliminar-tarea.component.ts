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
  @Input() modal!: string;
  @Output() modificarTareaEmitido = new EventEmitter<string>();


  constructor(private tareaService: ServicioTareasService, private router: Router) {
  }

  ngOnInit(): void {

  }

  ranking() {
    this.router.navigate(['main/consultas/ranking'])
  }
  cerrar() {
    this.modal = 'main'
    this.modificarTareaEmitido.emit(this.modal)
  }
}
