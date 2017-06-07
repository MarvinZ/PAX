import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAlertsComponent } from './pre-alerts.component';

describe('PreAlertsComponent', () => {
  let component: PreAlertsComponent;
  let fixture: ComponentFixture<PreAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
