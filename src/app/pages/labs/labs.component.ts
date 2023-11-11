import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowElementsComponent } from './components/show-elements/show-elements.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { ReactiveSignalComponent } from './components/reactive-signal/reactive-signal.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [
    CommonModule,
    ShowElementsComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    ReactiveSignalComponent,
    ControlFlowComponent
  ],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss',
})
export class LabsComponent {
  title = 'Welecome to your learn Angular';
}
