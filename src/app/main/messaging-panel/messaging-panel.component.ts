import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-messaging-panel',
  templateUrl: './messaging-panel.component.html',
  styleUrls: ['./messaging-panel.component.scss']
})
export class MessagingPanelComponent implements OnInit {

  @Output() toggleAside = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  messagingPanel_toggleAside() {
    this.toggleAside.emit();
  }
}
