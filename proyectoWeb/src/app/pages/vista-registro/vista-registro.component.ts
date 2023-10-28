import { Component, OnInit } from '@angular/core';
import { RegionesService } from 'src/app/services/regiones.service';

@Component({
  selector: 'app-vista-registro',
  templateUrl: './vista-registro.component.html',
  styleUrls: ['./vista-Registro.component.scss']
})
export class VistaRegistroComponent implements OnInit {
  regiones: any[] = [];
  constructor(private RegionesService: RegionesService) { }
  ngOnInit(): void {
    this.RegionesService.getRegiones().subscribe((data) =>  {
      this.regiones = data;
    })
  }
}

