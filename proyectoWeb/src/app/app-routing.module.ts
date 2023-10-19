import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaNoticiaComponent } from './pages/vista-noticia/vista-noticia.component';
import { VistaForoComponent } from './pages/vista-foro/vista-foro.component';
import { VistaCarrouselComponent } from './pages/vista-carrousel/vista-carrousel.component';

const routes: Routes = [
  {
    path: 'noticia', component: VistaNoticiaComponent },
  {
    path: 'foro', component: VistaForoComponent
  },
  {
    path: 'galeria', component: VistaCarrouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
