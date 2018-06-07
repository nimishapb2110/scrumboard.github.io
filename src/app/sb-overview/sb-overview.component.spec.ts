import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbOverviewComponent } from './sb-overview.component';

describe('SbOverviewComponent', () => {
  let component: SbOverviewComponent;
  let fixture: ComponentFixture<SbOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
