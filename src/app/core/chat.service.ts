import { Injectable } from '@angular/core';
import { File } from './file';
import { Message } from './message';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  users: { [key: number]: User };
  members: User[];
  files: File[];
  messages: Message[];

  constructor() {
    this.users = {
      1: new User(1, 'John', 'Doe', true, 'assets/profile-pic/profile-pic1.png', 9548756481, 'john123@gmail.com'),
      2: new User(2, 'Austine', '', false, 'assets/profile-pic/profile-pic2.png', 8456217496, 'austine@gmail.com'),
      3: new User(3, 'Samantha', 'Ruth', false, 'assets/profile-pic/profile-pic3.png', 9845621452, 'sam@gmail.com'),
      4: new User(4, 'Lily', '', true, 'assets/profile-pic/profile-pic4.png', 9854562154, 'lily@gmail.com'),
      5: new User(5, 'Joe', 'Tribiani', true, 'assets/profile-pic/profile-pic5.png', 9874563210, 'how_you_doin@gmail.com'),
      6: new User(6, 'Gowtham', 'S', true, 'assets/profile-pic/profile-pic6.png', 9791898746, 'gowthamsuresh6599@gmail.com')
    };

    this.members = [
      this.users[1],
      this.users[2],
      this.users[3],
      this.users[4],
      this.users[5],
      this.users[6]
    ];

    this.files = [
      new File(1, 'Angular Documentation', 'Miško Hevery', 'Yesterday at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'),
      new File(2, 'React Documentation', 'Jordan Walke', 'Yesterday at 16:00', 'https://cdn.auth0.com/blog/react-js/react.png'),
      new File(3, 'Vue', 'Evan You', 'Today at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'),
      new File(4, 'HTML docs', 'Tim Berners-Lee', 'Oct 20th at 08:10', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')
    ];

    this.messages = [
      new Message(1, 1, 'Hi there!', new Date()),
      new Message(2, 2, 'Hey how r u', new Date()),
      new Message(3, 3, 'okay', new Date()),
      new Message(4, 4, 'thank you', new Date()),
      new Message(5, 1, 'Here comes Joe...', new Date()),
      new Message(6, 5, 'How you doin', new Date()),
      new Message(7, 2, '😊', new Date()),
      new Message(8, 3, '😊', new Date()),
      new Message(9, 4, '😊', new Date()),
    ];
  }

  addToCart(msg: string): void {
    this.messages.push(new Message(this.messages.length + 1, 6, msg, new Date()));
  }

  // tslint:disable-next-line: typedef
  getMessages() {
    return this.messages;
  }

  getUsers(): { [key: number]: User }  {
    return this.users;
  }

  getMembers(): User[] {
    return this.members;
  }

  getFiles(): File[] {
    return this.files;
  }

  getUser(id: number): User {
    return this.users[id];
  }
}
