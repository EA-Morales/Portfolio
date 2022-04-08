export interface infoPersonal {
  id: number;
  nombreyapellido: string;
  puesto: string;
  ubicacion: string;
}

export interface descripcion {
  id: number;
  texto: string;
}

export interface datos {
  id: number;
  establecimiento: string;
  especialidad: string;
  year: number;
}

export interface skills {
  id: number;
  titulo: string;
  color: string;
  value: number;
}

export interface proyects {
  id: number;
  img: string;
  titulo: string;
  descripcion: string;
  link: string;
}
