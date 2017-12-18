import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { DadosService } from './dados.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ContatosComponent } from './contatos/contatos.component';
import { CompromissosComponent } from './compromissos/compromissos.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { DxDataGridModule, DxButtonModule, DxTabsModule, DxSelectBoxModule } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    CompromissosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxButtonModule,
    AppRoutingModule,
    DxTabsModule,
    DxSelectBoxModule
  ],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);