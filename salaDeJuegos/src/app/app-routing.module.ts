import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RockPaperScissorsComponent } from './componentes/rock-paper-scissors/rock-paper-scissors.component';
import { PrincipalNavComponent } from './principal-nav/principal-nav.component';
import { MiDashBoardComponent } from './componentes/mi-dash-board/mi-dash-board.component';

import { AdivinaNumeroComponent } from './componentes/adivina-numero/adivina-numero.component';
import { AritmeticaComponent } from './componentes/aritmetica/aritmetica.component';

const routes: Routes = [
  { path: 'principal', component: MiDashBoardComponent },
  { path: 'rps', component: RockPaperScissorsComponent },
  { path: 'AdivinaNumero', component: AdivinaNumeroComponent },
  { path: 'Aritmetica', component: AritmeticaComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/principal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
