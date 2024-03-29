import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {userSessionStorage} from "../interfaces/login-interface";
import {tareaPost} from "../interfaces/tarea-interface";
import {UsuarioService} from "../services/usuario/usuario.service";
import {HttpResponse} from "@angular/common/http";
import {ServicioTareasService} from "../services/tareas/servicio-tareas.service";
import {Router} from "@angular/router";
import {UserGet} from "../interfaces/usuario-interface";

@Component({
  selector: 'app-crear-tarea',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})
export class CrearTareaComponent implements OnInit {
  usuario: userSessionStorage = {id: 0, token: "", rol: ""}

  mensaje: string = ""
  crearTareaForm = new FormGroup({
    descripcion: new FormControl('', Validators.required),
    dificultad: new FormControl('', Validators.required),
    hrsPrevistas: new FormControl(0, Validators.required),
    realizadas: new FormControl({value: 0, disabled: true}),
    porcentaje: new FormControl({value: 0, disabled: true}),
    completada: new FormControl({value: 0, disabled: true}),
    usuario: new FormControl(0, Validators.required),
  })
  usuarios?: any[] = []

  @Output() crearTareaEmitido = new EventEmitter<string>()
  @Input() modal!: string;
  constructor(private usuarioService: UsuarioService, private tareaServicio: ServicioTareasService, private router: Router) {}

  ngOnInit(): void {
    this.modal = 'consultas'
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      this.usuario = JSON.parse(usuarioAlmacenado) as userSessionStorage;
    }
    // Obtener todos los usuarios
    this.usuarioService.getUsuarios(this.usuario.token).subscribe({
      next: (data: HttpResponse<UserGet>) => {
        console.log(data)
        this.usuarios = data.body?.usuarios
      },
      error: (err) => {
        console.log("Error al obtener usuarios", err)
      }
    })
  }

  crearTarea() {
    let body: tareaPost = {
      descripcion: this.crearTareaForm.value.descripcion || '',
      dificultad: this.crearTareaForm.value.dificultad || '',
      porcentaje: this.crearTareaForm.value.porcentaje || 0,
      horas_realizadas: this.crearTareaForm.value.realizadas || 0,
      horas_previstas: this.crearTareaForm.value.hrsPrevistas || 0,
      id_usuario: this.crearTareaForm.value.usuario || 0,
      completada: this.crearTareaForm.value.completada || 0
    }
    this.tareaServicio.postTareas(this.usuario.token, body).subscribe({
      next: (data: HttpResponse<any>) => {
        if (data.status === 200) {
          // tarea creada

          this.modal = 'main'
          this.crearTareaEmitido.emit(this.modal)
        }
      },
      error: (err) => {
        this.mensaje = "Error crear la tarea"
      }
    })
  }

  cerrar() {
    this.modal = 'main'
    this.crearTareaEmitido.emit(this.modal)
  }
}
