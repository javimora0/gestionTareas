import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mostrar-tareas',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-tareas.component.html',
  styleUrl: './mostrar-tareas.component.css'
})
export class MostrarTareasComponent implements OnInit{
  @Input() tareas!: any[] | undefined;
  @Input() mostrarTareas!: boolean
  @Output() pasarDato = new EventEmitter<boolean>()

  ngOnInit(): void {
    console.log(this.tareas)
  }
  cerrar() {
    this.mostrarTareas = false
    this.pasarDato.emit(this.mostrarTareas)
  }
}
