import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateAsideComponent } from './private-aside.component';

describe('PrivateAsideComponent', () => {
  let component: PrivateAsideComponent;
  let fixture: ComponentFixture<PrivateAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
