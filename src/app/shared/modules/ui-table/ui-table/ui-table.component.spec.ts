import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UITableComponent } from './ui-table.component';

describe('UiTableComponent', () => {
  let component: UITableComponent;
  let fixture: ComponentFixture<UITableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UITableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UITableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
