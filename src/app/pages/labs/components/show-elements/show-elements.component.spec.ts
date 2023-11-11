import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowElementsComponent } from './show-elements.component';

describe('ShowElementsComponent', () => {
  let component: ShowElementsComponent;
  let fixture: ComponentFixture<ShowElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
