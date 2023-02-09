export interface Serie{
  _id: string,
  nombre: string,
  url: String[],
  numeroCapitulos: number,
  year: number,
  sinopsis: string,
  puntuacion: Puntuacion[]
  categorias: string[],
}

export interface Puntuacion{
  _id: string,
  email: string,
  puntuacion: number
}

export interface Categoria {
  _id: string,
  nombre: string,
  url: string
}

