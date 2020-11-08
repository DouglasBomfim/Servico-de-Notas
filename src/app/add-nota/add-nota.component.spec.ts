import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotaComponent } from './add-nota.component';

describe('AddNotaComponent', () => {
  let component: AddNotaComponent;
  let fixture: ComponentFixture<AddNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
