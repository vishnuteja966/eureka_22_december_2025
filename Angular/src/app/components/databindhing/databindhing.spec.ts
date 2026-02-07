import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Databindhing } from './databindhing';

describe('Databindhing', () => {
  let component: Databindhing;
  let fixture: ComponentFixture<Databindhing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Databindhing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Databindhing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
