import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  user: User;
  displayPicture: string;
  userName: string;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.user = this.chatService.getUserById('D01GOWTHAMS');
    this.displayPicture = this.user.displayPicture;
    this.userName = this.user.firstName + ' ' + this.user.lastName;
  }

}
