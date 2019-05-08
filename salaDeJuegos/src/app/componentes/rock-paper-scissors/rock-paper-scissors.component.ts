import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.sass']
})
export class RockPaperScissorsComponent implements OnInit {
  resultados = [0, 0];
  armas = ['rock', 'paper', 'scissors'];
  constructor() { }
  jugadorSelecciono = -1;
  enemigoSelecciono = -1;
  loading = false;
  isResultShow = false;
  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0
  ngOnInit() {
  }
  elegir(arma: number): void {
    // return immediately when still loading. You don't want
    // the user to spam the button.
    if (this.loading) return;
    this.loading = true;
    this.jugadorSelecciono = arma;

    setTimeout(() => {
      this.loading = false;
      //generar un numero de 0 -2
      const randomNum = Math.floor(Math.random() * 3 ) ;
      this.enemigoSelecciono = randomNum;
      this.checkResult();
      this.isResultShow = true;
    }, Math.floor(Math.random() * 500 ) +200);
  }
  reset(): void{
    this.resultados = [0,0];
  }
  /**
   * checkResult
   */
  public checkResult():void {
    const eleccionJugador = this.jugadorSelecciono;
    const eleccionEnemigo = this.enemigoSelecciono;
    if (eleccionJugador == eleccionEnemigo) {
      this.theResult = 2;
    }
    else if ((eleccionJugador - eleccionEnemigo +3)%3==1){
      //A WINNER IS YOU
      this.theResult = 0;
      this.resultados[0] = this.resultados[0]+1;
    }
    else{
      //perdedor
      this.theResult = 1;
      this.resultados[1] = this.resultados[1]+1;
    }
  }

}
