import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tarea} from "../interfaces/tarea-interface";
import {userSessionStorage} from "../interfaces/login-interface";
import {HttpResponse} from "@angular/common/http";
import {ServicioTareasService} from "../services/tareas/servicio-tareas.service";

@Component({
  selector: 'app-modificar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './modificar-tarea.component.html',
  styleUrl: './modificar-tarea.component.css'
})
export class ModificarTareaComponent implements OnInit{
  @Input() modificarTareaModal!: boolean;
  @Output() modificarTareaEmitido = new EventEmitter<boolean>()
  tareas? : any[] = []
  usuario: userSessionStorage = {id: 0, token: "", rol: ""}

  constructor(private tareaService: ServicioTareasService) {}
  ngOnInit(): void {
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      this.usuario = JSON.parse(usuarioAlmacenado) as userSessionStorage;
    }
    this.tareaService.getTareas(this.usuario.token).subscribe({
      next: (data: HttpResponse<any>) => {
        console.log(data)
        this.tareas = data.body.tareas
      },
      error: (err) => {
        console.log("Error al obtener tareas", err)
      }
    })
  }

  cerrar() {
    this.modificarTareaModal = false
    this.modificarTareaEmitido.emit(this.modificarTareaModal)
  }
}
