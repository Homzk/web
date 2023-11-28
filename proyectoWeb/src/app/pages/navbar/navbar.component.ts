import { Component, OnInit } from '@angular/core';
import { AlmacenService } from 'src/app/services/almacen.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(private almacen:AlmacenService) { }

  ngOnInit(): void {
    
  }
  CerrarSesion(){
    this.almacen.CerrarSesion();
  }
}

