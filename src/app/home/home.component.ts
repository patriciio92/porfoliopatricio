import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  miPorfolio:any;
  constructor(private dataPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.dataPorfolio.obtenerDatos().subscribe(data=>{
      this.miPorfolio=data;
    });
  }

}
