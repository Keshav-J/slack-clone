import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackBrowseComponent } from './slack-browse.component';

describe('SlackBrowseComponent', () => {
  let component: SlackBrowseComponent;
  let fixture: ComponentFixture<SlackBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlackBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
