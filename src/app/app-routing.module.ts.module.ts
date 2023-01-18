
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ExplaboralComponent } from './components/main/explaboral/explaboral.component';
import { EducacionComponent } from './components/main/educacion/educacion.component';
import { FooterComponent } from './components/footer/footer.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'explaboral', component: ExplaboralComponent},
  {path: 'educacion', component: EducacionComponent },
  {path: 'footer', component: FooterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
