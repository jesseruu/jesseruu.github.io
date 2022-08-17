import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/page/home', icon: 'home' },
    { title: 'Recomendaciones', url: 'page/recomendation', icon: 'image' },
    { title: 'Estadisticas', url: 'page/stadistics', icon: 'newspaper' },
  ];
  public labels = ['Oscar Lopez', 'Jonathan Reyes', 'Jesser Lemus'];
  constructor() { }
}
