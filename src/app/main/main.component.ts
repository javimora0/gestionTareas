import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  idUsuario: any
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.idUsuario = params.get('parametro')
    });
    console.log(this.idUsuario)
  }

  crearTarea() {}
  modificarTarea(){}
  borrarTarea(){}


}
