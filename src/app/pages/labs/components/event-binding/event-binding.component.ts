import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss',
})
export class EventBindingComponent {
  public title: string;
  public description: string;
  public changeInput:string;
  public keydownInput:string;

  constructor() {
    this.title = 'Event Binding';
    this.description =
      'This topic allow listen event:   template <tagHTML (event)="methodListenEvent([$event])"></tagHTML>';
      this.changeInput = '';
      this.keydownInput = '';
  }

  person = {
    name: 'Emerson',
    age: 20,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
    active: false
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.keydownInput = input.value;
    this.onConsole(`El evento ${event.type} genero el siguiente valor ${this.keydownInput}`);
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    this.changeInput = input.value;
    this.onConsole(`El evento ${event.type} genero el siguiente valor ${this.changeInput}`);
  }

  clickHandler() {
    this.onAlert(`Hola haz emitido un evento`);
  }

  dbClickHandler(event: Event) {
    this.onAlert(`Hola haz emitido este evento ${event.type}`);
  }

  private onAlert(message: string): void {
    alert(message);
    this.onConsole(message);
  }

  private onConsole(message: string): void {
    console.log(message)
  }
}
