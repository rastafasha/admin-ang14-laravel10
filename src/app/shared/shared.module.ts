import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuiconosComponent } from './menuiconos/menuiconos.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';

//paypal
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";




@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    PipesModule,
    NgxPayPalModule,
    NgbModule,
    NgxSpinnerModule,
    NgxPaginationModule

],
declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MenuiconosComponent,
],
exports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MenuiconosComponent,
]
})
export class SharedModule { }
