import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
  MatIconModule,
RouterLink,RouterLinkActive ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
 categoriaSelecionada = 'todas';

  produtos = [
    {
      id: 1,
      nome: 'Shampoo Brilho Intenso',
      descricao: 'Limpa suavemente e dá brilho ao cabelo',
      preco: 19.90,
      imagemUrl: 'https://via.placeholder.com/300x200',
      categoria: 'cabelo'
    },
    {
      id: 2,
      nome: 'Esmalte Vermelho Clássico',
      descricao: 'Cor vibrante e longa duração',
      preco: 9.99,
      imagemUrl: 'https://via.placeholder.com/300x200',
      categoria: 'unhas'
    },
    {
      id: 3,
      nome: 'Bolo de Cenoura com Cobertura',
      descricao: 'Fofinho e com muito chocolate',
      preco: 12.00,
      imagemUrl: 'https://via.placeholder.com/300x200',
      categoria: 'comida'
    }
  ];

  produtosFiltrados = [...this.produtos];

  onCategoriaChange(categoria: string) {
    this.categoriaSelecionada = categoria;

    if (categoria === 'todas') {
      this.produtosFiltrados = [...this.produtos];
    } else {
      this.produtosFiltrados = this.produtos.filter(p => p.categoria === categoria);
    }
  }

  editarProduto(produto: any) {
    console.log('Editar (simulado):', produto);
  }

  excluirProduto(id: number) {
    console.log('Excluir (simulado):', id);
  }
}
