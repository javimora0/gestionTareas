import {Component} from '@angular/core';
import {ServicioTareasService} from "../services/tareas/servicio-tareas.service";
import {Router} from "@angular/router";
import {userSessionStorage} from "../interfaces/login-interface";
import {ActivatedRoute} from '@angular/router';
import {HttpResponse} from "@angular/common/http";
import {Tarea} from "../interfaces/tarea-interface";

@Component({
  selector: 'app-info-tarea',
  standalone: true,
  imports: [],
  templateUrl: './info-tarea.component.html',
  styleUrl: './info-tarea.component.css'
})
export class InfoTareaComponent {
  usuario: userSessionStorage = {id: 0, token: "", rol: ""}

  constructor(private tareaService: ServicioTareasService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      this.usuario = JSON.parse(usuarioAlmacenado) as userSessionStorage;
    }
    this.router.paramMap.subscribe(params => {
      this.obtenerTarea(params.get('idTarea'))
    });

  }
  obtenerTarea(id: string | null) {
    this.tareaService.getTarea(this.usuario.token, id).subscribe({
      next: (data: HttpResponse<any>) => {
        console.log(data.body?.data)
      },
      error: (err) => {
        console.log("Error al obtener tareas", err)
      }
    })
  }
}
