import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IforforeachComponent } from './iforforeach.component';

describe('IforforeachComponent', () => {
  let component: IforforeachComponent;
  let fixture: ComponentFixture<IforforeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IforforeachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IforforeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
