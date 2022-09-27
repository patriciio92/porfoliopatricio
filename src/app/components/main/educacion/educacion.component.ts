import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  miExperiencia:any;
  
    constructor(private dataPorfolio:PorfolioService,) { }
    
  
    ngOnInit(): void {
      this.dataPorfolio.obtenerDatos().subscribe(data=>{
        this.miExperiencia=data.school;
      });
   
      
      
    }
  }