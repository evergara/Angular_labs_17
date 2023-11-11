import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  private _tasks = signal<string[]>([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ]);

  get tasks(): string[] {
    return this._tasks();
  }

  setTask(event:Event): void {
    const input = event.target as HTMLInputElement;
    this._tasks().push(input.value);
  }
}
