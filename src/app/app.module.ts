import { NgModule } from '@angular/core';
import { NgbModule,NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExplaboralComponent } from './main/explaboral/explaboral.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { AppRoutingModule } from './app-routing.module.ts.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PorfolioService } from './servicios/porfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    ExplaboralComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PorfolioService,NgbCarouselConfig],
  bootstrap: [AppComponent,ExplaboralComponent,HeaderComponent]
})
export class AppModule { }
