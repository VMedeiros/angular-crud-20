import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { PrimeNgModule } from './components/PrimeNg.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        CardsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [],
    exports: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        /* ---interface--- */
        PrimeNgModule
    ]
})
export class SharedComumModule { }
