import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorPrioritiesComponent } from './major-priorities.component';

describe('MajorPrioritiesComponent', () => {
  let component: MajorPrioritiesComponent;
  let fixture: ComponentFixture<MajorPrioritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorPrioritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorPrioritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
