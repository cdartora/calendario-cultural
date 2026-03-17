export interface Vernissage {
  id: string;
  titulo: string;
  data: Date;
  horaInicio: string;
  local: string;
  endereco?: string;
  descricao: string;
  linkEvento?: string;
  artista?: string;
}

export interface VernissageRaw {
  titulo: string;
  data: string;
  horaInicio: string;
  local: string;
  endereco?: string;
  descricao: string;
  linkEvento?: string;
  artista?: string;
}
