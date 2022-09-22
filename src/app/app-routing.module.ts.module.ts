import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from "./pages/home/HomeComponent";

import { ExplaboralComponent } from './components/main/explaboral/explaboral.component';


const routes: Routes = [
 
  {path: '', component:HomeComponent},
  {path: 'explaboral', component:ExplaboralComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'footer', component:FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
