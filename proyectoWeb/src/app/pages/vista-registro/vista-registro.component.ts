import { Component, OnInit } from '@angular/core';
import { RegionesService } from 'src/app/services/regiones.service';
import { ComunasService } from 'src/app/services/comunas.service';

@Component({
  selector: 'app-vista-registro',
  templateUrl: './vista-registro.component.html',
  styleUrls: ['./vista-registro.component.scss']
})
export class VistaRegistroComponent implements OnInit {
  regiones: any[] = [];
  comunas: string[] = [];
  selectedRegion: any;

  constructor(private regionesService: RegionesService, private comunasService: ComunasService) {}

  ngOnInit(): void {
    this.regionesService.getRegiones().subscribe((data) => {
      this.regiones = data;
    });
  }

  onRegionChange(event: Event) {
    const selectedRegionId = +(event.target as HTMLSelectElement).value;
    this.comunasService.getComunas().subscribe((comunas) => {
      this.comunas = comunas[selectedRegionId] || [];
    });
  }
}


