import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplitterModule } from 'primeng/splitter'
import { TabsModule } from 'primeng/tabs'
import { ButtonModule } from 'primeng/button'
import { CommonModule } from '@angular/common';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  imports: [
    SplitterModule,
    TabsModule,
    ButtonModule,
    CommonModule,
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
    this.generalService.get("/api/serviciosocial/buscador-proyectos/periodos").subscribe({
      next: (response: any) => {
        console.log(response)
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }
}
