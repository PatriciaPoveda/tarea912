import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css'],
})
export class CiudadesComponent {
  ciudades: string[] = [];
  ciudadesBorradas: string[] = [];
  ciudad: string | undefined = '';
  borrarCiudades(): void {
    this.ciudad = String(this.ciudades.pop()?.toString());
    this.ciudadesBorradas.push(this.ciudad);
  }
  pintarCiudad(): void {
    this.ciudades = [
      'Madrid',
      'Barcelona',
      'Sevilla',
      'Oviedo',
      'Caceres',
      'Toledo',
    ];
  }
}
