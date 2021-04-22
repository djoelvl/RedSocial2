import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './Juego/game/game.component';
import { Router, RouterModule } from '@angular/router';
import {rout} from './app.route';
import { PuntosComponent } from './Puntaje/puntos/puntos.component';
import { RegisterComponent } from './register/register.component'
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PuntosComponent,
    RegisterComponent,
    LoginComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, 
    rout,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
