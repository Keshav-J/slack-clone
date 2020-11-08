import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSingleLineComponent } from './user-single-line.component';

describe('UserSingleLineComponent', () => {
  let component: UserSingleLineComponent;
  let fixture: ComponentFixture<UserSingleLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSingleLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSingleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
