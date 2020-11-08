import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingPanelComponent } from './messaging-panel.component';

describe('MessagingPanelComponent', () => {
  let component: MessagingPanelComponent;
  let fixture: ComponentFixture<MessagingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
