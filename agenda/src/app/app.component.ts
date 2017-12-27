import { Component } from '@angular/core';
import { DadosService } from './dados.service';
import { Tab } from './dados';
import { Tabs } from './dados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabConteudo: string;
  tabs: Tab[];

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus(): void {
    this.tabs = this.dadosService.getMenus();
  }

  selectTab(e) {
    this.tabConteudo = this.tabs[e.itemIndex].conteudo;
  }
}
