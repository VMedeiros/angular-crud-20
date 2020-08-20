import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonServices } from 'src/app/controller/services/common.service';
import { PrimeNgModule } from '../shared/components/PrimeNg.module';
import { SharedComumModule } from '../shared/sharedComum.module';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { PessoaComponent } from './pessoa.component';
import { PessoaRoutingModule } from './pessoa.routing.module';

registerLocaleData(localePt);

@NgModule({
    declarations: [
        PessoaComponent,
        CadastroPessoaComponent,
    ],
    imports: [
        PessoaRoutingModule,
        SharedComumModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        /* ----interface---- */
        PrimeNgModule
    ],
    exports: [
        PessoaComponent
    ],
    providers: [
        CadastroPessoaComponent,
        CommonServices
    ],
})

export class PessoaModule { }
