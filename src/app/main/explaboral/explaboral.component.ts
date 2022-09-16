import { Component, OnInit } from '@angular/core';
import {PorfolioService} from 'src/app/servicios/porfolio.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-explaboral',
  templateUrl: './explaboral.component.html',
  styleUrls: ['./explaboral.component.css']
})
export class ExplaboralComponent implements OnInit {
miExperiencia:any;

  constructor(private datosPorfolio:PorfolioService,) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.miExperiencia=data.empresa;
    });
    NgbModule
  }
}
