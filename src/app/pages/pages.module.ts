import { NgModule } from '@angular/core' ;
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module.ts.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  
  
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule


  ],
  exports: [CommonModule,ComponentsModule,HomeComponent ],

  bootstrap: []
})
export class PagesModule { }
