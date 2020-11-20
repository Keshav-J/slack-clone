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

  starred = false;
  constructor(private sidenavService: SideNavService,
              private chatService: ChatService) {
    console.log(this.sidenavService.getSelectedItem() as unknown as number);
    this.user = this.chatService.getUser(this.sidenavService.getSelectedItem() as unknown as number);
    this.userSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      console.log(value as unknown as number);
      this.user = this.chatService.getUser(value as unknown as number);
      console.log(this.user);
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
