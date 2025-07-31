import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
  imagemUrl?: string;
  categoria?: string;
}
@Injectable({
  providedIn: 'root'
})


export class ProdutoService {


  constructor() { }
}
