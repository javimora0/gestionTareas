import {Component, OnInit} from '@angular/core';
import {userSessionStorage} from "../interfaces/login-interface";
import {HttpResponse} from "@angular/common/http";
import {ServicioTareasService} from "../services/tareas/servicio-tareas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tareas-realizadas',
  standalone: true,
  imports: [],
  templateUrl: './tareas-realizadas.component.html',
  styleUrl: './tareas-realizadas.component.css'
})
export class TareasRealizadasComponent implements OnInit{
  tareas? : any[] = []
  usuario: userSessionStorage = {id: 0, token: "", rol: ""}

  constructor(private tareaService: ServicioTareasService, private router: Router) {
  }
  ngOnInit(): void {
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      this.usuario = JSON.parse(usuarioAlmacenado) as userSessionStorage;
    }

    this.tareaService.getTareasRealizadas(this.usuario.token).subscribe({
      next: (data: HttpResponse<any>) => {
        console.log(data)
        this.tareas = data.body.data
      },
      error: (err) => {
        console.log("Error al obtener tareas", err)
      }
    })
  }
  cerrar() {
    this.router.navigate(['main/consultas'])
  }
}
