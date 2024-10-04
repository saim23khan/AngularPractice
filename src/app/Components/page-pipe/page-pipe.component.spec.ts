import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePipeComponent } from './page-pipe.component';

describe('PagePipeComponent', () => {
  let component: PagePipeComponent;
  let fixture: ComponentFixture<PagePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
