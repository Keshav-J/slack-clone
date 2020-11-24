import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';
import { User } from 'src/app/core/user';
import { SideNavService } from '../../../../core/side-nav.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {

  user: User;
  userSubscription: any;

  userName: string;

  starred = false;
  constructor(private sidenavService: SideNavService,
              private chatService: ChatService) {
    this.user = this.chatService.getUser(this.sidenavService.getSelectedItem());

    this.userSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.user = this.chatService.getUser(value);
      this.userName = this.user.firstName + ' ' + this.user.lastName;
    });
  }

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
