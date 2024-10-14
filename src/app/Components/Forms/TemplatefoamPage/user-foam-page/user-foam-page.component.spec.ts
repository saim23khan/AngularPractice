import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFoamPageComponent } from './user-foam-page.component';

describe('UserFoamPageComponent', () => {
  let component: UserFoamPageComponent;
  let fixture: ComponentFixture<UserFoamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFoamPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFoamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
