import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from "./pages/home/home.component";

import { ExplaboralComponent } from './components/main/explaboral/explaboral.component';
import { EducacionComponent } from './components/main/educacion/educacion.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: ' ', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'explaboral', component:ExplaboralComponent},
  {path: 'educacion', component:EducacionComponent },
  {path: 'footer', component:FooterComponent},
  {path: 'login', component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
