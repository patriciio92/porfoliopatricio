import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPorfolio:any;
  
    constructor(private datosPorfolio:PorfolioService,
      config: NgbCarouselConfig) {
      // customize default values of carousels used by this component tree
      config.interval = 4000; 
      config.wrap = true;
      config.keyboard = false;
      
    }
  
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.miPorfolio=data;
    });
    
  }

}
