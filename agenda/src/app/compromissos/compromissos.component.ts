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
  }

}
