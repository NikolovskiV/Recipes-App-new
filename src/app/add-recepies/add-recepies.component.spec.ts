import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecepiesComponent } from './add-recepies.component';

describe('AddRecepiesComponent', () => {
  let component: AddRecepiesComponent;
  let fixture: ComponentFixture<AddRecepiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecepiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecepiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
