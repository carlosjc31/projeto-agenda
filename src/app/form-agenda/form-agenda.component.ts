import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-form-agenda',
  standalone: false,

  templateUrl: './form-agenda.component.html',
  styleUrl: './form-agenda.component.css'
})
export class FormAgendaComponent implements OnInit {

  formGroupAgenda: FormGroup;
  isEditing: boolean = false;


  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private service: AgendaService,
              private formBuilder: FormBuilder) {
    this.formGroupAgenda = this.formBuilder.group({
      id:          [''],
      title:       [''],
      description: [''],
      date_hora:   [''],
      local:       ['']
    });
    }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.loadAgendas(id);
  }

  loadAgendas(id: number) {
    this.service.getAgendaById(id).subscribe({
      next: data => this.formGroupAgenda.setValue(data)
    });
  }

  update() {
    this.service.update(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['/agendas'])
    });
  }

  save() {
    this.service.save(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['/agendas'])
    })
  }

}
