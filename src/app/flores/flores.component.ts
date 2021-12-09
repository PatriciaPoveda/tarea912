import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css'],
})
export class FloresComponent {
  flores: string[] = [
    'Gardenia',
    'Gladiolo',
    'Lavanda',
    'Margarita',
    'Petunia',
    'Lirio',
    'Nardo',
    'Jacinto',
  ];
  borrarAllFlores(): void {
    this.flores = [];
  }
}
