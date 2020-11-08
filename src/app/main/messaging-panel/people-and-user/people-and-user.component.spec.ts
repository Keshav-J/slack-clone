import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleanduserComponent } from './people-and-user.component';


describe('PeopleAndUserComponent', () => {
  let component: PeopleanduserComponent;
  let fixture: ComponentFixture<PeopleanduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleanduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleanduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
