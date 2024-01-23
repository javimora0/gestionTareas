import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {CrearTareaComponent} from "./crear-tarea/crear-tarea.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent},
  { path: 'crear-tarea', component: CrearTareaComponent}
];
