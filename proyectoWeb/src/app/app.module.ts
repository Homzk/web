import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { VistaNoticiaComponent } from './pages/vista-noticia/vista-noticia.component';
import { VistaForoComponent } from './pages/vista-foro/vista-foro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VistaNoticiaComponent,
    VistaForoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
