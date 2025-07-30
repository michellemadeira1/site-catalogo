import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  categorias = ['Cabelo', 'Cosmeticos', 'Comida', 'Unhas', 'Tecnologia','Bebidas','Rpoupas','utilidades','outros'];
  produtoForm: FormGroup;
  imagemPreview: string | null = null;

  constructor(private fb: FormBuilder) {
    this.produtoForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: [''],
      preco: [null, [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required],
      imagemUrl: ['']
    });
  }

  onImagemSelecionada(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result as string;
        this.produtoForm.patchValue({ imagemUrl: this.imagemPreview });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.produtoForm.valid) {
      console.log('Produto cadastrado:', this.produtoForm.value);
      alert('Produto cadastrado com sucesso!');
      this.produtoForm.reset();
      this.imagemPreview = null;
    }
  }
}
