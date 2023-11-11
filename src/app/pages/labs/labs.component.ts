import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowElementsComponent } from './components/show-elements/show-elements.component';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ShowElementsComponent],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  title = 'Welecome to your learn Angular';
}
