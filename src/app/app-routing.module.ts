import { FormularioAgendaComponent } from './formulario-agenda/formulario-agenda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaAgendaComponent } from './tabela-agenda/tabela-agenda.component';

const routes: Routes = [
  { path: '', redirectTo: '/agendas', pathMatch: 'full' },
  { path: 'agendas', Component: TabelaAgendaComponent },
  { path: 'agenda/:id', Component: FormularioAgendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
