export interface UserGet {
  success:  boolean;
  usuarios: Usuario[];
}

export interface Usuario {
  id:                number;
  nombre:            string;
  email:             string;
  password:          string;
  tareasCompletadas: number;
  createdAt:         Date;
  updatedAt:         Date;
}
