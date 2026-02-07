import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDemo } from './clock-demo';

describe('ClockDemo', () => {
  let component: ClockDemo;
  let fixture: ComponentFixture<ClockDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
