import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {CrearTareaComponent} from "./crear-tarea/crear-tarea.component";
import {InfoTareaComponent} from "./info-tarea/info-tarea.component";
import {EliminarTareaComponent} from "./eliminar-tarea/eliminar-tarea.component";
import {RankingComponent} from "./ranking/ranking.component";
import {TareasRealizadasComponent} from "./tareas-realizadas/tareas-realizadas.component";
import {TareasIncompletasComponent} from "./tareas-incompletas/tareas-incompletas.component";
import {TareasProgramadorComponent} from "./tareas-programador/tareas-programador.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent},
  { path: 'tarea/details/:idTarea', component: InfoTareaComponent},
  { path: 'main/consultas', component: EliminarTareaComponent},
  { path: 'main/consultas/ranking', component: RankingComponent},
  { path: 'main/consultas/tareas/realizadas', component: TareasRealizadasComponent},
  { path: 'main/consultas/tareas/incompletas', component: TareasIncompletasComponent},
  { path: 'main/consultas/tareas/tarea', component: TareasProgramadorComponent}
];
