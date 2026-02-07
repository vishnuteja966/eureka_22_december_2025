import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeechild1 } from './employeechild1';

describe('Employeechild1', () => {
  let component: Employeechild1;
  let fixture: ComponentFixture<Employeechild1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeechild1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeechild1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
