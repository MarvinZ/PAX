import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedUsersComponent } from './authorized-users.component';

describe('AuthorizedUsersComponent', () => {
  let component: AuthorizedUsersComponent;
  let fixture: ComponentFixture<AuthorizedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
