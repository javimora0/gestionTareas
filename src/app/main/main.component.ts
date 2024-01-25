import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {userSessionStorage} from "../interfaces/login-interface";
import {ModalInicioSesionComponent} from "../modal-inicio-sesion/modal-inicio-sesion.component";
import {CrearTareaComponent} from "../crear-tarea/crear-tarea.component";
import {ModificarTareaComponent} from "../modificar-tarea/modificar-tarea.component";
import {EliminarTareaComponent} from "../eliminar-tarea/eliminar-tarea.component";
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {MatButton, MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    ModalInicioSesionComponent,
    CrearTareaComponent,
    ModificarTareaComponent,
    EliminarTareaComponent,
    MatButton,
    MatButtonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  usuario: userSessionStorage = {id: 0, token: "", rol: ""}
  login = true
  modal = 'main'
  constructor(private router: Router, public dialog: MatDialog) {
  }
  ngOnInit(): void {
    const usuarioAlmacenado = sessionStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      this.usuario = JSON.parse(usuarioAlmacenado) as userSessionStorage;
    } else {
      this.login = false
    }
  }

  crearTareaAbrir() {
    this.modal = 'crear'
  }

  modificarTareaAbrir() {
    this.modal = 'modificar'
  }
  eliminarTareaAbrir() {
    this.router.navigate(['main/consultas/ranking'])
  }

  manejarDatoRecibido(dato: string) {
    this.modal = dato
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { animal: 'panda' },
      width: '250px', // Opcional: puedes definir un ancho
      disableClose: false // Asegúrate de que esta opción esté false o ausente
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
      // Maneja el resultado si es necesario
    });
  }
}
