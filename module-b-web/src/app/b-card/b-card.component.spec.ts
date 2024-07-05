import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCardComponent } from './b-card.component';

describe('BCardComponent', () => {
  let component: BCardComponent;
  let fixture: ComponentFixture<BCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
