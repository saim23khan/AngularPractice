import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutescomponentpageComponent } from './routescomponentpage.component';

describe('RoutescomponentpageComponent', () => {
  let component: RoutescomponentpageComponent;
  let fixture: ComponentFixture<RoutescomponentpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutescomponentpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutescomponentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
