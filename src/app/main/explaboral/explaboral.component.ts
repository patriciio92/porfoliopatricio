import { Component, OnInit } from '@angular/core';
import {PorfolioService} from 'src/app/servicios/porfolio.service';
import {NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { style } from '@angular/animations';




@Component({
  selector: 'app-explaboral',
  templateUrl: './explaboral.component.html',
  styleUrls: ['./explaboral.component.css']
})
export class ExplaboralComponent implements OnInit {
miExperiencia:any;

  constructor(private dataPorfolio:PorfolioService,) { }
  

  ngOnInit(): void {
    this.dataPorfolio.obtenerDatos().subscribe(data=>{
      this.miExperiencia=data.empresa;
    });
    NgbAccordion
    
    
  }
}
