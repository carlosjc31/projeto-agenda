import { Agenda } from './../agenda';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-agenda',
  standalone: false,

  templateUrl: './lista-agenda.component.html',
  styleUrl: './lista-agenda.component.css'
})
export class ListaAgendaComponent {

  agendas: Agenda[] = [];

}
