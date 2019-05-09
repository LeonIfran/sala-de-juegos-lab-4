import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RockPaperScissorsComponent } from './componentes/rock-paper-scissors/rock-paper-scissors.component';
import { PrincipalNavComponent } from './principal-nav/principal-nav.component';
import { MiDashBoardComponent } from './componentes/mi-dash-board/mi-dash-board.component';

const routes: Routes = [
  { path: 'principal', component: MiDashBoardComponent },
  { path: 'rps', component: RockPaperScissorsComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/principal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
