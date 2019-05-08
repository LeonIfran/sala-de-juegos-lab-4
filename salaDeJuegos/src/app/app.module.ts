import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
 MatToolbarModule} from '@angular/material';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { RockPaperScissorsComponent } from './componentes/rock-paper-scissors/rock-paper-scissors.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RockPaperScissorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule
    

  ],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
