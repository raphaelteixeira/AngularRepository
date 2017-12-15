import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos: Contato[];
  telefonePattern: any = /^\(\d{2}\)\ \d{4}-\d{4}$/i;
  emailPattern: any = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/;

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.getContatos();
  }

  getContatos(): void {
    this.contatos = this.dadosService.getContatos();
    
  }
}
