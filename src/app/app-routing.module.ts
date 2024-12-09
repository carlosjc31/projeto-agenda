import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAgendaComponent } from './lista-agenda/lista-agenda.component';

const routes: Routes = [
  { path: '', redirectTo: 'agenda', pathMatch: 'full' },
  { path: 'agendas', component: ListaAgendaComponent },
  { path: 'agenda/:id', component: ListaAgendaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
