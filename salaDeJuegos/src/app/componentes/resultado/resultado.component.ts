import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.sass']
})
export class ResultadoComponent implements OnInit {
  @Input() public mensaje: string;
  @Input () public valido: boolean;
  constructor() { }

  ngOnInit() {
  }

}
