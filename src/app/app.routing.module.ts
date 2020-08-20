import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './view/shared/cards/cards.component';
import { HomeComponent } from './view/shared/home/home.component';
import { LoginComponent } from './view/shared/login/login.component';

/*  Rotas da Aplicação */
const rotas: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'card', component: CardsComponent },
      { path: 'pessoa', loadChildren: './view/pessoa/pessoa.module#PessoaModule' },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }
