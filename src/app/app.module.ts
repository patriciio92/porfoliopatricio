import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module.ts.module';
import { NgbModule,NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule



    
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
