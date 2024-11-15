import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabelaAgendaComponent } from './tabela-agenda/tabela-agenda.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioAgendaComponent } from './formulario-agenda/formulario-agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaAgendaComponent,
    FormularioAgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
