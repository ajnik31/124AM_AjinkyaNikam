import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCompComponent } from './second-comp.component';

describe('SecondCompComponent', () => {
  let component: SecondCompComponent;
  let fixture: ComponentFixture<SecondCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
