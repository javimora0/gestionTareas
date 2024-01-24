import {Component, OnInit} from '@angular/core';
import {ServicioTareasService} from "../services/tareas/servicio-tareas.service";
import {userSessionStorage} from "../interfaces/login-interface";
import {ActivatedRoute} from '@angular/router';
import {HttpResponse} from "@angular/common/http";
import {Tarea} from "../interfaces/tarea-interface";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserGet} from "../interfaces/usuario-interface";
import {UsuarioService} from "../services/usuario/usuario.service";

@Component({
  selector: 'app-info-tarea',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './info-tarea.component.html',
  styleUrl: './info-tarea.component.css'
})
export class InfoTareaComponent implements OnInit{
  mensaje = ''
  usuario: userSessionStorage = {id: 0, token: "", rol: ""}
  tarea?:any
  informacionTarea = new FormGroup({
    descripcion: new FormControl('', Validators.required),
    dificultad: new FormControl('', Validators.required),
    hrsPrevistas: new FormControl(0, Validators.required),
    realizadas: new FormControl(0,Validators.required),
    porcentaje: new FormControl(0,Validators.required),
    completada: new FormControl(0, Validators.required),
    usuario: new FormControl(0, Validators.required),
  })
  usuarios?: any[] = []

  constructor(private usuarioService: UsuarioService,private tareaService: ServicioTareasService, private router: ActivatedRoute) {
  }
  ngOnInit(): void {
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      this.usuario = JSON.parse(usuarioAlmacenado) as userSessionStorage;
    }

    this.usuarioService.getUsuarios(this.usuario.token).subscribe({
      next: (data: HttpResponse<UserGet>) => {
        console.log(data)
        this.usuarios = data.body?.usuarios
      },
      error: (err) => {
        console.log("Error al obtener usuarios", err)
      }
    })

    this.router.paramMap.subscribe(params => {
      this.obtenerTarea(params.get('idTarea'))
    });

  }
  obtenerTarea(id: string | null) {
    this.tareaService.getTarea(this.usuario.token, id).subscribe({
      next: (data: HttpResponse<any>) => {
        this.tarea = data.body.data
        this.mostrarTarea()
      },
      error: (err) => {
        console.log("Error al obtener tareas", err)
      }
    })
  }

  mostrarTarea() {
    this.informacionTarea.patchValue({
      descripcion: this.tarea.descripcion,
      dificultad: this.tarea.dificultad,
      hrsPrevistas: this.tarea.horas_previstas,
      realizadas: this.tarea.horas_realizadas,
      porcentaje: this.tarea.porcentaje,
      completada: this.tarea.completada,
      usuario: this.tarea.id_usuario
    });
  }
  cerrar() {

  }

  modificarTarea() {}
}
