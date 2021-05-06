import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GameComponent } from './Juego/game/game.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component'
import { InicioComponent } from './inicio/inicio.component';
import { AmigosComponent } from './amigos/amigos.component';
import { SolicitudAmistadComponent } from './solicitud-amistad/solicitud-amistad.component';
import { MuroamigoComponent } from './muroamigo/muroamigo.component';


const routes: Routes = [
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'Juego/:userName', component: GameComponent },
    { path: 'inicio/:username/:userid', component: InicioComponent },
    { path: 'amigos/:username/:userid', component: AmigosComponent},
    { path: 'solicitud/:username/:userid', component: SolicitudAmistadComponent},
    { path: 'muro/:username/:userid/:amigoid', component: MuroamigoComponent}

];
export const rout = RouterModule.forRoot(routes);

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}


