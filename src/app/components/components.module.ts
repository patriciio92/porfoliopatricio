
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PorfolioService } from '../servicios/porfolio.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ExplaboralComponent } from './main/explaboral/explaboral.component';
import { EducacionComponent } from './main/educacion/educacion.component';
import { NgbAccordion, NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module.ts.module';
import { HabilidadesComponent } from './main/habilidades/habilidades.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';









@NgModule({
  declarations: [
    EducacionComponent,
    ExplaboralComponent,
    HeaderComponent,
    FooterComponent,
    HabilidadesComponent,
    LoginComponent,
    NavbarComponent,
    
  ],
  
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
     FormsModule,
      ReactiveFormsModule
  ],
    
    providers: [
      PorfolioService,
      NgbCarouselConfig,
      NgbAccordion
       ],


  bootstrap: [
    ExplaboralComponent,
    HeaderComponent,
    EducacionComponent],
    
    exports: [
      CommonModule,
      EducacionComponent,
      ExplaboralComponent,
      HeaderComponent,
      FooterComponent,
      HabilidadesComponent ,
      NavbarComponent
     ]
})


export class ComponentsModule { }
