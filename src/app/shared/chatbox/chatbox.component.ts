import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  blur: boolean;
  showFormat: boolean = true;
  constructor(private chatservice: ChatService) { }

  ngOnInit(): void {
  }
  isBlur(): void {
    this.blur = true;
  }
  changeFormat(): void {
    this.showFormat = !this.showFormat;
  }
  addToCart(msg) {
    this.chatservice.addToCart(msg);
  }
  addmsg(){
    const msg=(<HTMLInputElement>document.getElementById("msgData")).value;
    
    console.log("from add msg "+msg);
    this.addToCart(msg);
  }
}
