import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlflowifComponent } from './controlflowif.component';

describe('ControlflowifComponent', () => {
  let component: ControlflowifComponent;
  let fixture: ComponentFixture<ControlflowifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlflowifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlflowifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
