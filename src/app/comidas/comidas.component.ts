import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css'],
})
export class ComidasComponent {
  comidas: string[] = [
    'macarrones',
    'paella',
    'codido',
    'espinacas',
    'ensalada',
    'calamares',
    'croquetas',
    'pimientos',
  ];
  borrarAllComidas(): void {
    this.comidas = [];
  }
}
