import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {

  messages;
  constructor(private chatservice: ChatService) { }

  ngOnInit(): void {
    this.messages = this.chatservice.getMessages();
    console.log(this.messages);
  }
  addToCart(msg) {
    this.chatservice.addToCart(msg);
  }
  addmsg(){
    const msg=(<HTMLInputElement>document.getElementById("msgData")).value;
    
    console.log("from add msg "+msg);
    this.addToCart(msg);
  }
  makeBreak(message): boolean {
    message.time = message.time;
    return true;
  }
}
