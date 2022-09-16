import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExplaboralComponent } from './main/explaboral/explaboral.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { AppRoutingModule } from './app-routing.module.ts.module';

@NgModule({
  declarations: [
    AppComponent,
    ExplaboralComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,ExplaboralComponent]
})
export class AppModule { }
