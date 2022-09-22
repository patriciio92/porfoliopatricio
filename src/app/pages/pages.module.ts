import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/HomeComponent";
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module.ts.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent

  ],
  
  
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule


  ],
  exports: [CommonModule,HomeComponent,ComponentsModule  ],

  bootstrap: []
})
export class PagesModule { }
