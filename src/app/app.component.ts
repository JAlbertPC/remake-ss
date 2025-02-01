import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplitterModule } from 'primeng/splitter'
import { TabsModule } from 'primeng/tabs'
import { ButtonModule } from 'primeng/button'
import { CommonModule } from '@angular/common';
import { GeneralService } from './services/general.service';
import {Select, SelectChangeEvent} from 'primeng/select';
import {FormsModule} from '@angular/forms';
import periodosJSON from './periodos.json';
import centrosDocentesJSON from './centros-docentes.json';
import programasEducativosJSON from './programas-educativos.json';
import {Divider} from 'primeng/divider';

@Component({
  selector: 'app-root',
  imports: [
    SplitterModule,
    TabsModule,
    ButtonModule,
    CommonModule,
    Select,
    FormsModule,
    Divider,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  siceiBaseUrl = "/api/serviciosocial/buscador-proyectos"
  routesSicei = {
    "periodos": `${this.siceiBaseUrl}/periodos`,
    "centros_docentes": `${this.siceiBaseUrl}/centros-docentes`,
    "programas_educativos": `${this.siceiBaseUrl}/programas-educativos`
  }

  periodos: any = [];
  centrosDocentes: any = [];
  programasEducativos: any = [];

  title = 'servicio-social';

  tabs = [
    {
      title: 'Tab 1',
    },
    {
      title: 'Tab 2',
    },
    {
      title: 'Tab 3',
    },
    {
      title: 'Tab 4',
    },
    {
      title: 'Tab 5',
    }

  ]

  constructor(
    private generalService: GeneralService
  ) {
  }

  ngOnInit(): void {
    this.obtenerPeriodos()
  }

  obtenerPeriodos() {
    /*this.generalService.get(`${this.routesSicei.periodos}`).subscribe({
      next: (response: any) => {
        this.periodos = response;
        console.log(response)
      },
      error: (error: any) => {
        console.log(error)
      }
    })*/
    this.periodos = periodosJSON;
    this.obtenerCentroDocentes();
  }

  obtenerCentroDocentes() {
    this.centrosDocentes = centrosDocentesJSON
    this.obtenerProgramasEducativos();
  }

  obtenerProgramasEducativos() {
    this.programasEducativos = programasEducativosJSON
    setTimeout(() => console.log(this.periodos, this.centrosDocentes, this.programasEducativos), 1000);
  }

  seeSelected($event: SelectChangeEvent) {
    console.log($event.originalEvent)
    console.log($event.value)
  }
}
