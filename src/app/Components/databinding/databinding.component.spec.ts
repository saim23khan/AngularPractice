import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingComponent } from './databinding.component';
import { NgModel } from '@angular/forms';

describe('DatabindingComponent', () => {
  let component: DatabindingComponent;
  let fixture: ComponentFixture<DatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
