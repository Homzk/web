import { Component, OnInit } from '@angular/core';
import { RegionesService } from 'src/app/services/regiones.service';
import { ComunasService } from 'src/app/services/comunas.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-vista-registro',
  templateUrl: './vista-registro.component.html',
  styleUrls: ['./vista-registro.component.scss']
})
export class VistaRegistroComponent implements OnInit {
  regiones: any[] = [];
  comunas: string[] = [];
  selectedRegion: any;
  
  formulario: FormGroup;
  patronRut =  "/^\d{7,8}-[kK\d]{1}$/";
  patronContrasenya = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)$";
  nombreUsuario: AbstractControl;
  rut: AbstractControl;
  email: AbstractControl;
  region: AbstractControl;
  comuna: AbstractControl;
  contrasenya: AbstractControl;
  Ccontrasenya: AbstractControl;
  aceptarTerminos: AbstractControl;


  constructor(private regionesService: RegionesService, private comunasService: ComunasService, private formBuilder: FormBuilder) 
  {
    this.formulario = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required,Validators.minLength(4)]],
      rut: ['', [Validators.required, Validators.pattern(this.patronRut)]],
      email: ['', [Validators.required, Validators.email]],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      contrasenya: ['', [Validators.required, Validators.pattern(this.patronContrasenya), Validators.minLength(8)]],
      Ccontrasenya: ['', [Validators.required, this.confCheck]],
      aceptarTerminos: [false, Validators.requiredTrue]
    });
    this.nombreUsuario = this.formulario.controls['nombreUsuario']
    this.rut = this.formulario.controls['rut']
    this.email = this.formulario.controls['email']
    this.region = this.formulario.controls['region']
    this.comuna = this.formulario.controls['comuna']
    this.contrasenya = this.formulario.controls['contrasenya']
    this.Ccontrasenya = this.formulario.controls['Ccontrasenya']
    this.aceptarTerminos = this.formulario.controls['aceptarTerminos']
  }

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

  confCheck(control: AbstractControl): { [key: string]: any } | null {
    const contrasenya = control.value;
    const confirmacionContrasenya = control.value;
    return contrasenya === confirmacionContrasenya ? null : { 'confInvalid': true };
  }

  registro(){

  }
}

