import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cadastro-login',
 standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule,
    RouterLink,
  RouterLinkActive
  ],
  templateUrl: './cadastro-login.component.html',
  styleUrl: './cadastro-login.component.scss'
})
export class CadastroLoginComponent {

}
