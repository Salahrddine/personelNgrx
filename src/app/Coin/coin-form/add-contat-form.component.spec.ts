import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContatFormComponent } from './add-contat-form.component';

describe('AddContatFormComponent', () => {
  let component: AddContatFormComponent;
  let fixture: ComponentFixture<AddContatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
