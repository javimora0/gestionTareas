import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tarea} from "../interfaces/tarea-interface";
import {userSessionStorage} from "../interfaces/login-interface";
import {HttpResponse} from "@angular/common/http";
import {ServicioTareasService} from "../services/tareas/servicio-tareas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modificar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './modificar-tarea.component.html',
  styleUrl: './modificar-tarea.component.css'
})
export class ModificarTareaComponent implements OnInit{
  @Input() modal!: string;
  @Output() modificarTareaEmitido = new EventEmitter<string>()
  tareas? : any[] = []
  usuario: userSessionStorage = {id: 0, token: "", rol: ""}

  constructor(private tareaService: ServicioTareasService, private router: Router) {}
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
    this.modal = 'main'
    this.modificarTareaEmitido.emit(this.modal)
  }

  infoTarea(id: number) {
    this.router.navigate(['tarea/details', id], {skipLocationChange: true}).then(r => console.log(r));
  }
}
