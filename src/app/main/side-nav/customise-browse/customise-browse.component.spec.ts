import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseBrowseComponent } from './customise-browse.component';

describe('CustomiseBrowseComponent', () => {
  let component: CustomiseBrowseComponent;
  let fixture: ComponentFixture<CustomiseBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomiseBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
