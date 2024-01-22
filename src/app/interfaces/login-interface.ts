export interface Data {
  msg:   string;
  data:  User;
  token: string;
}

export interface User {
  id:                number;
  nombre:            string;
  email:             string;
  password:          string;
  tareasCompletadas: number;
  createdAt:         Date;
  updatedAt:         Date;
}

export interface userLogin {
  email:            string;
  password:         string;
  rol:              string
}

export interface userSessionStorage {
  id:               number,
  token:            string
}
