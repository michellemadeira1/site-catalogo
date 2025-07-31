import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroLoginComponent } from './pages/auth/cadastro-login/cadastro-login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginCadastro', component: CadastroLoginComponent  },

];
