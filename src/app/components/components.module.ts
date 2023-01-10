
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PorfolioService } from '../servicios/porfolio.service';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ExplaboralComponent } from './main/explaboral/explaboral.component';
import { EducacionComponent } from './main/educacion/educacion.component';
import { NgbAccordion, NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module.ts.module';
import { HabilidadesComponent } from './main/habilidades/habilidades.component';
import { LoginComponent } from './login/login.component';









@NgModule({
  declarations: [
    EducacionComponent,
    ExplaboralComponent,
    HeaderComponent,
    FooterComponent,
    HabilidadesComponent,
    LoginComponent,
    
  ],
  
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
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
      HabilidadesComponent 
     ]
})


export class ComponentsModule { }
