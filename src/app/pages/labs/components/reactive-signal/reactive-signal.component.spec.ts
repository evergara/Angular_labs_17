import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSignalComponent } from './reactive-signal.component';

describe('ReactiveSignalComponent', () => {
  let component: ReactiveSignalComponent;
  let fixture: ComponentFixture<ReactiveSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
