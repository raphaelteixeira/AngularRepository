import { Component, OnInit } from '@angular/core';
import { Compromisso } from '../compromisso';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-compromissos',
  templateUrl: './compromissos.component.html',
  styleUrls: ['./compromissos.component.css']
})
export class CompromissosComponent implements OnInit {

  compromissos: Compromisso[];

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.getCompromissos();
  }

  getCompromissos(): void {
    this.compromissos = this.dadosService.getCompromissos();

    for (let compromisso of this.compromissos) {
      let dataCompromisso = new Date(compromisso.data);
      let dataAtual = new Date();

      if (dataCompromisso.getTime() == dataAtual.getTime()) {
        console.log("Compromisso: ", dataCompromisso.getTime());
        console.log("Atual: ", dataAtual.getTime());


      }
    }
  }

}
