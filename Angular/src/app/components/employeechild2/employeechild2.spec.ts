import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeechild2 } from './employeechild2';

describe('Employeechild2', () => {
  let component: Employeechild2;
  let fixture: ComponentFixture<Employeechild2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeechild2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeechild2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
