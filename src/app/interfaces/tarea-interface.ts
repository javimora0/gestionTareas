export interface tareaPost {
  descripcion: string,
  dificultad: string,
  horas_previstas: number,
  horas_realizadas: number,
  porcentaje: number,
  completada: number,
  id_usuario: number
}

export interface TareaGet {
  success: boolean;
  tareas:  Tarea[];
}

export interface Tarea {
  id:               number;
  descripcion:      string;
  dificultad:       string;
  horas_previstas:  number;
  horas_realizadas: number;
  porcentaje:       number;
  completada:       number;
  id_usuario:       number;
  createdAt:        Date;
  updatedAt:        Date;
}
