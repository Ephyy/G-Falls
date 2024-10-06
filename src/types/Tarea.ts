export interface TareaProps {
    id: number;
    nombre: string;
    fechaInicial: number;
    fechaFinal: number;
    fechaAtraso?: number;
    estado: string;
  }