import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  miPorfolio:any;
  
    constructor(private datosPorfolio:PorfolioService ) {}

  
    ngOnInit(): void {
      this.datosPorfolio.obtenerDatos().subscribe(data=>{
        this.miPorfolio=data;
      });
      
    }
    
  }

