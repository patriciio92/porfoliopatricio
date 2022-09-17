import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';

import { ExplaboralComponent } from './main/explaboral/explaboral.component';


const routes: Routes = [
  {path: 'home', component:AppComponent},
  {path: 'home', component:HomeComponent},
  {path: 'explaboral', component:ExplaboralComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'footer', component:FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
