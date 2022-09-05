import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotformComponent } from './slotform.component';

describe('SlotformComponent', () => {
  let component: SlotformComponent;
  let fixture: ComponentFixture<SlotformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
