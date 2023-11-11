import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-elements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-elements.component.html',
  styleUrl: './show-elements.component.scss'
})
export class ShowElementsComponent {
  for = "@for";
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ];

  name = "Emerson";
  age = 20;
}
