import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {userSessionStorage} from "../interfaces/login-interface";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  usuario: userSessionStorage = {id: 0, token: "", rol: ""}
  login = true
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      this.usuario = JSON.parse(usuarioAlmacenado) as userSessionStorage;
    } else {
      this.login = false
    }
  }

}
