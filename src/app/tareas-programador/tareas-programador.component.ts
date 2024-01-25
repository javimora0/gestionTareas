import {Component, OnInit} from '@angular/core';
import {userSessionStorage} from "../interfaces/login-interface";
import {HttpResponse} from "@angular/common/http";
import {UserGet} from "../interfaces/usuario-interface";
import {UsuarioService} from "../services/usuario/usuario.service";
import {ServicioTareasService} from "../services/tareas/servicio-tareas.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-tareas-programador',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './tareas-programador.component.html',
  styleUrl: './tareas-programador.component.css'
})
export class TareasProgramadorComponent implements OnInit{
  usuarios?: any[] = []
  usuario: userSessionStorage = {id: 0, token: "", rol: ""}

  constructor(private usuarioService: UsuarioService,private tareaService: ServicioTareasService, private routerNavigate: Router) {}
  ngOnInit(): void {
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      this.usuario = JSON.parse(usuarioAlmacenado) as userSessionStorage;
    }

    this.usuarioService.getUsuarios(this.usuario.token).subscribe({
      next: (data: HttpResponse<UserGet>) => {
        this.usuarios = data.body?.usuarios
      },
      error: (err) => {
        console.log("Error al obtener usuarios", err)
      }
    })
  }
  programadorControl = new FormControl('');

  tareas?: any[] = []

  buscarTarea() {
    let idSeleccionado = this.programadorControl.value;
    if (typeof idSeleccionado === "string") {
      this.tareaService.getTareasUsuario(this.usuario.token, parseInt(idSeleccionado)).subscribe({
        next: (data: HttpResponse<any>) => {
          this.tareas = data.body.data
          console.log(this.tareas)
      },
        error: (err) => {
          console.log("Error al obtener usuarios", err)
        }
      })
    }
  }


}
