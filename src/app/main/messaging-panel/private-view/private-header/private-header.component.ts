import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';
import { User } from 'src/app/core/user';
import { SideNavService } from '../../../../core/side-nav.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {

  @Input() userName: string;

  starred = false;

  constructor() { }

  @Output() toggleAside = new EventEmitter();


  ngOnInit(): void {
  }

  toggleStar(): void {
    this.starred = !this.starred;
  }

  header_toggleAside(): void {
    this.toggleAside.emit();
  }
}
