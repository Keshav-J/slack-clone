import { Injectable } from '@angular/core';
import { Channel } from './channel';
import { File } from './file';
import { Message } from './message';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  users: { [key: string]: User };
  channels: { [key: string]: Channel };

  members: User[];
  files: File[];
  messages: Message[];

  constructor() {
    this.users = {
      D1: new User('D1', 'John', 'Doe', true, 'assets/profile-pic/profile-pic1.png', 9548756481, 'john123@gmail.com'),
      D2: new User('D2', 'Austine', '', false, 'assets/profile-pic/profile-pic2.png', 8456217496, 'austine@gmail.com'),
      D3: new User('D3', 'Samantha', 'Ruth', false, 'assets/profile-pic/profile-pic3.png', 9845621452, 'sam@gmail.com'),
      D4: new User('D4', 'Lily', '', true, 'assets/profile-pic/profile-pic4.png', 9854562154, 'lily@gmail.com'),
      D5: new User('D5', 'Joe', 'Tribiani', true, 'assets/profile-pic/profile-pic5.png', 9874563210, 'how_you_doin@gmail.com'),
      D6: new User('D6', 'Gowtham', 'S', true, 'assets/profile-pic/profile-pic6.png', 9791898746, 'gowthamsuresh6599@gmail.com')
    };

    this.channels = {
      C01: new Channel('C01',
                        'general',
                        '',
                        'This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations.',
                        false,
                        new Date(2020, 8, 4),
                        ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'],
                        [
                          new Message(1, 'D1', 'Hi there!', new Date()),
                          new Message(2, 'D2', 'Hey how r u', new Date()),
                          new Message(3, 'D3', 'okay', new Date()),
                          new Message(4, 'D4', 'thank you', new Date()),
                          new Message(5, 'D1', 'Here comes Joe...', new Date()),
                          new Message(6, 'D5', 'How you doin', new Date()),
                          new Message(7, 'D2', '😊', new Date()),
                          new Message(8, 'D3', '😊', new Date()),
                          new Message(9, 'D4', '😊', new Date()),
                        ],
                        [],
                        [
                          new File(1, 'Angular Documentation', 'Miško Hevery', 'Yesterday at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'),
                          new File(2, 'React Documentation', 'Jordan Walke', 'Yesterday at 16:00', 'https://cdn.auth0.com/blog/react-js/react.png'),
                          new File(3, 'Vue', 'Evan You', 'Today at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'),
                          new File(4, 'HTML docs', 'Tim Berners-Lee', 'Oct 20th at 08:10', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')
                        ]
                      ),
      C02: new Channel('C02',
                        'training',
                        '',
                        'Channel to share training related information and documents.',
                        false,
                        new Date(2020, 8, 4),
                        ['D3', 'D5', 'D6'],
                        [
                          new Message(1, 'D3', 'Hey', new Date()),
                          new Message(2, 'D5', 'How you doin', new Date()),
                          new Message(3, 'D3', '😊', new Date()),
                        ],
                        [],
                        [
                          new File(1, 'Angular Documentation', 'Miško Hevery', 'Yesterday at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'),
                          new File(2, 'HTML docs', 'Tim Berners-Lee', 'Oct 20th at 08:10', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')
                        ]
                      ),
      G02: new Channel('G02',
                      'bug-slayers',
                      '',
                      'This is private group. Not a channel.',
                      true,
                      new Date(2020, 11, 3),
                      ['D1', 'D3', 'D5', 'D6'],
                      [
                        new Message(1, 'D1', 'Hi', new Date()),
                        new Message(2, 'D3', 'Hey', new Date()),
                        new Message(3, 'D5', 'How you doin', new Date()),
                        new Message(4, 'D3', '😊', new Date()),
                      ],
                      [],
                      [
                        new File(1, 'Angular Documentation', 'Miško Hevery', 'Yesterday at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'),
                        new File(2, 'HTML docs', 'Tim Berners-Lee', 'Oct 20th at 08:10', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')
                      ]
                    )
    };

    this.members = [
      this.users.D1,
      this.users.D2,
      this.users.D3,
      this.users.D4,
      this.users.D5,
      this.users.D6
    ];

    this.files = [
      new File(1, 'Angular Documentation', 'Miško Hevery', 'Yesterday at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'),
      new File(2, 'React Documentation', 'Jordan Walke', 'Yesterday at 16:00', 'https://cdn.auth0.com/blog/react-js/react.png'),
      new File(3, 'Vue', 'Evan You', 'Today at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'),
      new File(4, 'HTML docs', 'Tim Berners-Lee', 'Oct 20th at 08:10', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')
    ];

    this.messages = [
      new Message(1, 'D1', 'Hi there!', new Date()),
      new Message(2, 'D2', 'Hey how r u', new Date()),
      new Message(3, 'D3', 'okay', new Date()),
      new Message(4, 'D4', 'thank you', new Date()),
      new Message(5, 'D1', 'Here comes Joe...', new Date()),
      new Message(6, 'D5', 'How you doin', new Date()),
      new Message(7, 'D2', '😊', new Date()),
      new Message(8, 'D3', '😊', new Date()),
      new Message(9, 'D4', '😊', new Date()),
    ];
  }

  addToCart(msg: string): void {
    this.messages.push(new Message(this.messages.length + 1, 'D6', msg, new Date()));
  }

  getChannels(): { [key: string]: Channel } {
    return this.channels;
  }

  getMessages(): Message[] {
    return this.messages;
  }

  getUsers(): { [key: string]: User }  {
    return this.users;
  }

  getUsersWithId(ids: string[]): User[] {
    const filteredUsers: User[] = [];
    Object.keys(this.users).forEach(userId => {
      if (ids.includes(userId)) {
        filteredUsers.push(this.users[userId]);
      }
    });
    return filteredUsers;
  }

  getMembers(): User[] {
    return this.members;
  }

  getFiles(): File[] {
    return this.files;
  }

  getUserById(id: string): User {
    return this.users[id];
  }

  getChannelById(id: string): Channel {
    return this.channels[id];
  }

  getUsersList(): User[] {
    return Object.values(this.users);
  }

  getChannelsList(): Channel[] {
    return Object.values(this.channels);
  }
}
