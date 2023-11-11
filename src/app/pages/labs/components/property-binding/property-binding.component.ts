import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss',
})
export class PropertyBindingComponent {
  public title: string;
  public img: string;
  public age: number;
  public interpolation: string;
  public binding: string;
  public object: string;
  public disabled: boolean;
  public name:string;

  constructor() {
    this.title = 'Property Binding';
    this.name = 'Emerson';
    this.age = 20;
    this.img = 'https://w3schools.com/howto/img_avatar.png';
    this.interpolation = 'Whit interpolation att="{{property}}", but it is not good option'
    this.binding = 'Whit binding [att]="property", it is recomendaba This is the most recommended'
    this.object = 'Whit binding more object [att]="object.property"'
    this.disabled = true;
  }

  person = {
    name: 'Emerson',
    age: 20,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
    active: false
  }


}
