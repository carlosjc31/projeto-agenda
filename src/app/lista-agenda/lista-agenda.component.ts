import { Router } from '@angular/router';
import { AgendaService } from '../agenda.service';
import { Agenda } from './../agenda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-agenda',
  standalone: false,

  templateUrl: './lista-agenda.component.html',
  styleUrl: './lista-agenda.component.css'
})
export class ListaAgendaComponent implements OnInit{

  agendas: Agenda[] = [];

  constructor(private agendaService: AgendaService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.agendaService.getAgenda().subscribe( data =>{
      this.agendas = data;
    });
  }

  delete(Agenda: Agenda): void{
    this.agendaService.delete(Agenda).subscribe({
      next: () => this.loadAgendas()
    });
  }

  loadAgendas(): void {
    this.agendaService.getAgenda().subscribe(data =>{
      this.agendas = data
    });
  }

  create(){
    this.router.navigate(['/agenda']);
  }

}
