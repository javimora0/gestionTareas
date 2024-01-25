import {Component, OnInit} from '@angular/core';
import {userSessionStorage} from "../interfaces/login-interface";
import {UsuarioService} from "../services/usuario/usuario.service";
import {HttpResponse} from "@angular/common/http";
import {Usuario} from "../interfaces/usuario-interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent implements OnInit {
  usuario: userSessionStorage = {id: 0, token: "", rol: ""}

  constructor(private userService: UsuarioService, private router: Router) {
  }

  ngOnInit(): void {
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      this.usuario = JSON.parse(usuarioAlmacenado) as userSessionStorage;
    }
    this.getRanking()
  }
  users : Usuario[] = []
  getRanking() {
    this.userService.getRanking(this.usuario.token ).subscribe({
      next: (data: HttpResponse<any>) => {
        this.users = data.body?.data
      }
    })
  }
  cerrar() {
    this.router.navigate(['/main/consultas'])
  }
}
