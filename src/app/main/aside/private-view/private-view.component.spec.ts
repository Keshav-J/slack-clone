import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateViewComponent } from './private-view.component';

describe('PrivateViewComponent', () => {
  let component: PrivateViewComponent;
  let fixture: ComponentFixture<PrivateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
