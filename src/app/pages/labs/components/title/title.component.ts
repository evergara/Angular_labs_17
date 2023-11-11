import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  @Input({required: true}) title:string;
  @Input({required: true}) description:string;
  @Input({required: false}) link:string;

  constructor(){
    this.description = '';
    this.title = '';
    this.link = '';
  }

}
