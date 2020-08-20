import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    ProgressSpinnerModule,
    OverlayPanelModule,
    ScrollPanelModule,
    SplitButtonModule,
    InputTextModule,
    PaginatorModule,
    MessagesModule,
    CheckboxModule,
    FieldsetModule,
    SidebarModule,
    MessageModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    SliderModule,
    ToastModule,
    TableModule,
    StepsModule,
    CardModule,
    TooltipModule,
    InputMaskModule

  ],
  exports: [
    ProgressSpinnerModule,
    OverlayPanelModule,
    ScrollPanelModule,
    SplitButtonModule,
    InputTextModule,
    PaginatorModule,
    MessagesModule,
    CheckboxModule,
    FieldsetModule,
    SidebarModule,
    MessageModule,
    MenubarModule,
    MenuModule,
    ButtonModule,
    DialogModule,
    SliderModule,
    ToastModule,
    TableModule,
    StepsModule,
    CardModule,
    TooltipModule,
    InputMaskModule
  ],
  providers: [MessageService],
})
export class PrimeNgModule {
}
