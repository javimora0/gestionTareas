import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {CrearTareaComponent} from "./crear-tarea/crear-tarea.component";
import {InfoTareaComponent} from "./info-tarea/info-tarea.component";
import {EliminarTareaComponent} from "./eliminar-tarea/eliminar-tarea.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent},
  { path: 'tarea/details/:idTarea', component: InfoTareaComponent},
  { path: 'main/consultas', component: EliminarTareaComponent}
];
