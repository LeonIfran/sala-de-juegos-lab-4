import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-mi-dash-board',
  templateUrl: './mi-dash-board.component.html',
  styleUrls: ['./mi-dash-board.component.css']
})
export class MiDashBoardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'RPS', cols: 2, rows: 1, img: "ppt.png", texto: 'Elija su arma y juegue contra la computadora', ruta: '/rps' },
        { title: 'Aritmetica', cols: 1, rows: 1, img: "aritmetica.jpg", texto: 'Pruebe la destreza de su mente', ruta: '/Aritmetica'},
        { title: 'Adivine el numero', cols: 1, rows: 2, img: "adivina.jpg", texto: 'Pruebe su suerte', ruta: '/AdivinaNumero' },
        { title: 'Adivine el pais', cols: 1, rows: 1, img: "banderas.jpg", texto:'Demuestre su conocimiento en geografia', ruta: '/Banderas' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
  Redireccionar(url: string) { location.href = url; }
}
