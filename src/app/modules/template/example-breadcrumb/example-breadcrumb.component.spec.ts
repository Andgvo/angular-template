import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBreadcrumbComponent } from './example-breadcrumb.component';

describe('ExampleBreadcrumbComponent', () => {
  let component: ExampleBreadcrumbComponent;
  let fixture: ComponentFixture<ExampleBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
