import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
 MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule, MatDialogModule, MatInputModule, MatRadioModule} from '@angular/material';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { RockPaperScissorsComponent } from './componentes/rock-paper-scissors/rock-paper-scissors.component';
import { PrincipalNavComponent } from './principal-nav/principal-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MiDashBoardComponent } from './componentes/mi-dash-board/mi-dash-board.component';
import { AdivinaNumeroComponent } from './componentes/adivina-numero/adivina-numero.component';
import { FormsModule } from '@angular/forms';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
import { AritmeticaComponent } from './componentes/aritmetica/aritmetica.component';
import { BanderaComponent } from './componentes/bandera/bandera.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RockPaperScissorsComponent,
    PrincipalNavComponent,
    MiDashBoardComponent,
    AdivinaNumeroComponent,
    ResultadoComponent,
    AritmeticaComponent,
    BanderaComponent
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
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatRadioModule
    

  ],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
