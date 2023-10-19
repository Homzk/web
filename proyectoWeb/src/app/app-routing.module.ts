import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaNoticiaComponent } from './pages/vista-noticia/vista-noticia.component';

const routes: Routes = [
  {
    path: 'noticia', component: VistaNoticiaComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
