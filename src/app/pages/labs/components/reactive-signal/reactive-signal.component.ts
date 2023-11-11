import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-reactive-signal',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './reactive-signal.component.html',
  styleUrl: './reactive-signal.component.scss'
})
export class ReactiveSignalComponent {

  private _count = signal(0);
  private _name = signal<string>('');

  get count(): number{
    return this._count();
  }

  get name(): string{
    return this._name();
  }

  onClick(): void{
    this._count.set(this._count() + 1)
  }

  changeHandler(event: Event ): void{
    const input = event.target as HTMLInputElement;
    this._name.set(input.value);
  }

}
