import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInComponent } from './walk-in.component';

describe('WalkInComponent', () => {
  let component: WalkInComponent;
  let fixture: ComponentFixture<WalkInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalkInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
