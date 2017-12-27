import { Contato } from './contato';
import { CONTATOS } from './dados';
import { Injectable } from '@angular/core';
import { Compromisso } from './compromisso';
import { COMPROMISSOS } from './dados';
import { Lembrete } from './lembrete';
import { Tabs } from './dados';
import { Tab } from './dados';

@Injectable()
export class DadosService {

  constructor() { }

  getContatos(): Contato[] {
    return CONTATOS;
  }

  getMenus(): Tab[] {
    return Tabs;
  }

  getCompromissos(): Compromisso[] {
    return COMPROMISSOS;
  }

  getLembretes(): Array<Lembrete> {

    let lembretes = Array<Lembrete>();

    var id: number = 1;

    for (let compromisso of this.getCompromissos()) {
      let dataCompromisso = new Date(compromisso.data);

      if (this.comparaData(dataCompromisso)) {
        let lembrete = new Lembrete();
        lembrete.id = id;
        lembrete.compromisso = compromisso;

        lembretes.push(lembrete);

        id++;
      }
    }

    return lembretes;
  }

  comparaData(dataCompromisso: Date): boolean {
    let dataAtual = new Date();
    return dataCompromisso.getDate() == dataAtual.getDate() &&
      dataCompromisso.getFullYear() == dataAtual.getFullYear() &&
      dataCompromisso.getMonth() == dataAtual.getMonth();
  }
}
