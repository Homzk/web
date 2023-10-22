import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaNoticiaComponent } from './pages/vista-noticia/vista-noticia.component';
import { VistaForoComponent } from './pages/vista-foro/vista-foro.component';
import { VistaCarrouselComponent } from './pages/vista-carrousel/vista-carrousel.component';
import { VistaIngresarAlertaComponent } from './pages/vista-ingresar-alerta/vista-ingresar-alerta.component';
import { VistaCrearNoticiaComponent } from './pages/vista-crear-noticia/vista-crear-noticia.component';
import { VistaInicioComponent } from './pages/vista-inicio/vista-inicio.component';

const routes: Routes = [
  {
    path: 'noticia', component: VistaNoticiaComponent },
  {
    path: 'foro', component: VistaForoComponent
  },
  {
    path: 'galeria', component: VistaCarrouselComponent
  },
  {
    path: 'ingresarAlerta', component: VistaIngresarAlertaComponent
  },
  {
    path: 'crearNoticia', component: VistaCrearNoticiaComponent
  },
  {
    path: 'inicio', component: VistaInicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
