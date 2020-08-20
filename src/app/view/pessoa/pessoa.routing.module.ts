import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pessoa.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';

const PessoaRoutes: Routes = [
    {
        path: '',
        component: PessoaComponent,
        children: [
            {
                path: 'app-cadastro-pessoa',
                component: CadastroPessoaComponent,
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(PessoaRoutes),
    ],
    exports: [
        RouterModule
    ],
})

export class PessoaRoutingModule { }
