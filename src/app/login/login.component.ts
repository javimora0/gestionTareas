import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from '../services/auth/auth-service.service'
import {userSessionStorage, userLogin} from "../interfaces/login-interface";
import {Route, Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";
import {ServicioCompartidoService} from "../services/compartido/servicio-compartido.service";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatOption, MatSelect} from "@angular/material/select";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatFormField, MatInput, FormsModule, MatFormFieldModule, MatInputModule, MatIcon, MatIconButton, MatSelect, MatOption],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      this.routes.navigate(['/main']).then(r => console.log(r))
    }
  }
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private servicioCompartido: ServicioCompartidoService,
    private routes: Router
  ) {
  }

  usuario: userSessionStorage = {id: 0, token: "", rol: ""}
  hide = true;
  token: string | undefined = ""
  mensaje: string = ""


  emailFormControl = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    rol: new FormControl('') // Aquí agregamos el FormControl para el rol
  });


  usuarioSessiontorage: userSessionStorage = {id: 0, token: "", rol: ""}

  logear() {
    // (??): Este operador devuelve el valor de su lado izquierdo si no es null ni undefined. Si lo es, devuelve el valor del lado derecho.
    let body: userLogin = {
      email: this.emailFormControl.value.email ?? '',
      password: this.emailFormControl.value.password ?? '',
      rol: this.emailFormControl.value.rol ?? ''
    };

    this.authService.login(body).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 203) {
          this.mensaje = response.body.msg
        } else {
          this.usuarioSessiontorage.id = response.body.data.id
          this.usuarioSessiontorage.token = response.body.token
          this.usuarioSessiontorage.rol = <string>this.emailFormControl.value.rol
          sessionStorage.setItem('usuario', JSON.stringify(this.usuarioSessiontorage))

          // Uso de servicio compartido para pasar datos a otro componente sin relacion, pasa el nombre al app.root
          this.servicioCompartido.cambiarItem(response.body.data.nombre);

          // Pasa por parametro el id del usuario
          this.router.navigate(['/main']).then(r => console.log(r));
        }
        console.log('Código de estado:', response.status);
        console.log('Cuerpo de la respuesta:', response.body);
      },
      error: (err) => {
        console.log(err)
      }

    })

  }
}
