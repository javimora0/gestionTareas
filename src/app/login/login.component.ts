import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from '../services/auth/auth-service.service'
import {userSessionStorage, userLogin} from "../interfaces/login-interface";
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  constructor(private authService: AuthServiceService, private router:Router){}


  token: string | undefined = ""
  mensaje: string = ""

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required)
  })

  usuarioSessiontorage : userSessionStorage = {
    id: 0,
    token: ""
  }
  logear() {
    // (??): Este operador devuelve el valor de su lado izquierdo si no es null ni undefined. Si lo es, devuelve el valor del lado derecho.
    let body: userLogin = {
      email: this.loginForm.value.email ?? '',
      password: this.loginForm.value.password ?? '',
      rol: this.loginForm.value.rol ?? ''
    };

    this.authService.login(body).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 203) {
          this.mensaje = response.body.msg
        }else {
          this.usuarioSessiontorage.id = response.body.data.id
          this.usuarioSessiontorage.token = response.body.token
          sessionStorage.setItem('usuario', JSON.stringify(this.usuarioSessiontorage))
          this.router.navigate(['/main', response.body.data.id], {skipLocationChange: true}).then(r => console.log(r));
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
