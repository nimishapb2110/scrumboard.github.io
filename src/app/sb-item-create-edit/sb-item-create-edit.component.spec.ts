import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbItemCreateEditComponent } from './sb-item-create-edit.component';

describe('SbItemCreateEditComponent', () => {
  let component: SbItemCreateEditComponent;
  let fixture: ComponentFixture<SbItemCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbItemCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbItemCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
