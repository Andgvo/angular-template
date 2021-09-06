import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleStyleComponent } from './example-style.component';

describe('ExampleStyleComponent', () => {
  let component: ExampleStyleComponent;
  let fixture: ComponentFixture<ExampleStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
