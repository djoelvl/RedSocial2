import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GameComponent } from './Juego/game/game.component';
import { PuntosComponent } from './Puntaje/puntos/puntos.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component'
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
    
    { path: 'login', component: LoginComponent },
    { path: 'Puntos', component: PuntosComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'Juego/:userName', component: GameComponent },
    { path: 'inicio/:userName', component: InicioComponent }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
export const rout = RouterModule.forRoot(routes);

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}


