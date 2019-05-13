import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';
import { Button } from 'protractor';



@Component({
  selector: 'app-bandera',
  templateUrl: './bandera.component.html',
  styleUrls: ['./bandera.component.sass']
})
export class BanderaComponent implements OnInit {

  esCorrecta: boolean;
  esperando = true;
  randomNombrePais;
  randomCodigoISO;
  arrayOpciones = new Array;
  miRespuesta;
  contadorCorrecto = 0;
  contadorFallo = 0;
  constructor(private miPaisesService: PaisesService) { }

  ngOnInit() {
  }

  proximo() {
    this.esperando=false;
    this.arrayOpciones = [];
    let countries = this.miPaisesService.getPaises();
    let random = Math.floor(Math.random() * countries.length);

    let randomUno = Math.floor(Math.random() * countries.length);
    let randomDos = Math.floor(Math.random() * countries.length);
    let paisUno;
    let paisDos;

    while (randomUno == random || randomDos == random) {
       randomUno = Math.floor(Math.random() * countries.length);
       randomDos = Math.floor(Math.random() * countries.length);
    }

/*     if (countries[random]["official_name_es"] !== null) {
      this.randomNombrePais = countries[random]["official_name_es"];
    }
    else {
      this.randomNombrePais = countries[random]["CLDR display name"]
    } */
    this.randomNombrePais = BanderaComponent.verificarNulo(random ,countries);
    paisUno = BanderaComponent.verificarNulo(randomUno ,countries);
    paisDos = BanderaComponent.verificarNulo(randomDos ,countries);
    this.randomCodigoISO = countries[random]["ISO3166-1-Alpha-2"];

    /* this.arrayOpciones.push(countries[randomUno]["CLDR display name"], countries[randomDos]["CLDR display name"], this.randomNombrePais); */
    this.arrayOpciones.push(paisUno, paisDos, this.randomNombrePais);
    this.arrayOpciones.sort();
    console.log(this.randomCodigoISO, this.randomNombrePais)
    console.log(this.arrayOpciones);
  }

  compararRespuesta() {
    if (this.miRespuesta == this.randomNombrePais) {
      this.contadorCorrecto++;
      this.esCorrecta = true;
    }
    else {
      this.contadorFallo++;
      this.esCorrecta = false;
    }
    this.esperando = true;
  }

  static verificarNulo(posicion,  countries)
  {
    if (countries[posicion]["official_name_es"] !== null) {
      return countries[posicion]["official_name_es"];
    }
    else {
      return countries[posicion]["CLDR display name"]
    }
    
  }
}
