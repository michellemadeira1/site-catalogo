import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // importe aqui
import { MatButtonModule } from '@angular/material/button'; // se for usar botões
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule,MatButtonToggleModule,HttpClientModule,
RouterLink,RouterLinkActive ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {
  categoriaSelecionada = 'todas';

  produtos = [
    {
      nome: 'Bolo de milho cremoso',
      descricao: 'Receita caseira tradicional',
      preco: 10,
      categoria: 'comida',
      imagemUrl: 'https://via.placeholder.com/300x200.png?text=Bolo+de+Milho'
    },
    {
      nome: 'Batom Matte Vult',
      descricao: 'Cores vibrantes e alta durabilidade',
      preco: 15,
      categoria: 'cosmeticos',
      imagemUrl: 'https://via.placeholder.com/300x200.png?text=Batom+Matte'
    },
    {
      nome: 'Cuscuz nordestino',
      descricao: 'Prato típico artesanal com manteiga de garrafa',
      preco: 12,
      categoria: 'comida',
      imagemUrl: 'https://via.placeholder.com/300x200.png?text=Cuscuz'
    }
  ];

  produtosFiltrados = this.produtos;

  onCategoriaChange(categoria: string) {
    this.categoriaSelecionada = categoria;
    if (categoria === 'todas') {
      this.produtosFiltrados = this.produtos;
    } else {
      this.produtosFiltrados = this.produtos.filter(p => p.categoria === categoria);
    }
  }

  gerarLinkWhatsapp(nomeProduto: string): string {
    const telefone = '11983511295';
    const mensagem = `Olá! Tenho interesse no produto: ${nomeProduto}`;
    return `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  }
}
