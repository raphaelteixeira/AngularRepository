import { Contato } from './contato';
import { CONTATOS } from './lista-contatos';
import { Injectable } from '@angular/core';
import { Compromisso } from './compromisso';
import { COMPROMISSOS } from './lista-compromissos';

@Injectable()
export class DadosService {

  constructor() { }

  getContatos(): Contato[] {
    return CONTATOS;
  }

  getCompromissos(): Compromisso[] {
    return COMPROMISSOS;
  }

}
