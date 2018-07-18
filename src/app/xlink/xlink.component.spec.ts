import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XlinkComponent } from './xlink.component';

describe('XlinkComponent', () => {
  let component: XlinkComponent;
  let fixture: ComponentFixture<XlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
