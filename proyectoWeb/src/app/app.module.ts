import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { VistaNoticiaComponent } from './pages/vista-noticia/vista-noticia.component';
import { VistaForoComponent } from './pages/vista-foro/vista-foro.component';
import { VistaIngresarAlertaComponent } from './pages/vista-ingresar-alerta/vista-ingresar-alerta.component';
import { VistaCrearNoticiaComponent } from './pages/vista-crear-noticia/vista-crear-noticia.component';
import { VistaInicioComponent } from './pages/vista-inicio/vista-inicio.component';
import { VistaInicioSesionComponent } from './pages/vista-inicio-sesion/vista-inicio-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VistaRegistroComponent } from './pages/vista-registro/vista-registro.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VistaNoticiaComponent,
    VistaForoComponent,
    VistaIngresarAlertaComponent,
    VistaCrearNoticiaComponent,
    VistaInicioComponent,
    VistaInicioSesionComponent,
    VistaRegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
