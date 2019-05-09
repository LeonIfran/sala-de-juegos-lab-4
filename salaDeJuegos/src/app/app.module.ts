import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
 MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule} from '@angular/material';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { RockPaperScissorsComponent } from './componentes/rock-paper-scissors/rock-paper-scissors.component';
import { PrincipalNavComponent } from './principal-nav/principal-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MiDashBoardComponent } from './componentes/mi-dash-board/mi-dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RockPaperScissorsComponent,
    PrincipalNavComponent,
    MiDashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule
    

  ],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
