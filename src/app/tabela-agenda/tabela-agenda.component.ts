
import { AgendasService } from '../agendas.service';
import { agenda } from './../agenda';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-agenda',
  templateUrl: './tabela-agenda.component.html',
  styleUrl: './tabela-agenda.component.css'
})
export class TabelaAgendaComponent {
  agendas: agenda[] = [];

  constructor(private agendasService: AgendasService) { }

  ngOnInit(): void {
    this.agendasService.getAgendas().subscribe(data =>{
      this.agendas = data;
    });
  }
  loadAgendas(): void {
    this.agendasService.getAgendas().subscribe(data => {
      this.agendas = data;
    });
  }

}
