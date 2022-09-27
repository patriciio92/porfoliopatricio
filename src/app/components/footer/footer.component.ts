import { Component, OnInit } from '@angular/core';
import {PorfolioService} from 'src/app/servicios/porfolio.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  misRedes:any;
  
    constructor(private dataPorfolio:PorfolioService,) { }
    
  
    ngOnInit(): void {
      this.dataPorfolio.obtenerDatos().subscribe(data=>{
        this.misRedes=data.redes;
      });
      
      
      
    }
  }
 

