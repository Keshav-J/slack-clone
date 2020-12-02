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
      D01JOHNDOE0: new User('D01JOHNDOE0', 'John', 'Doe', true, 'assets/profile-pic/profile-pic1.png', 9548756481, 'john123@gmail.com'),
      D01AUSTINE0: new User('D01AUSTINE0', 'Austine', '', false, 'assets/profile-pic/profile-pic2.png', 8456217496, 'austine@gmail.com'),
      D01SAMANTHA: new User('D01SAMANTHA', 'Samantha', 'Ruth', false, 'assets/profile-pic/profile-pic3.png', 9845621452, 'sam@gmail.com'),
      D01LILY0000: new User('D01LILY0000', 'Lily', '', true, 'assets/profile-pic/profile-pic4.png', 9854562154, 'lily@gmail.com'),
      D01JOETRIBI: new User('D01JOETRIBI', 'Joe', 'Tribiani', true, 'assets/profile-pic/profile-pic5.png', 9874563210, 'how_you_doin@gmail.com'),
      D01GOWTHAMS: new User('D01GOWTHAMS', 'Gowtham', 'S', true, 'assets/profile-pic/profile-pic6.png', 9791898746, 'gowthamsuresh6599@gmail.com')
    };

    this.channels = {
      C01GENERAL0: new Channel('C01GENERAL0',
                        'general',
                        '',
                        'This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations.',
                        false,
                        new Date(2020, 8, 4),
                        ['D01JOHNDOE0', 'D01AUSTINE0', 'D01SAMANTHA', 'D01LILY0000', 'D01JOETRIBI', 'D01GOWTHAMS'],
                        [
                          new Message(1, 'D01JOHNDOE0', 'Hi there!', new Date()),
                          new Message(2, 'D01AUSTINE0', 'Hey how r u', new Date()),
                          new Message(3, 'D01SAMANTHA', 'okay', new Date()),
                          new Message(4, 'D01LILY0000', 'thank you', new Date()),
                          new Message(5, 'D01JOHNDOE0', 'Here comes Joe...', new Date()),
                          new Message(6, 'D01JOETRIBI', 'How you doin', new Date()),
                          new Message(7, 'D01AUSTINE0', '😊', new Date()),
                          new Message(8, 'D01SAMANTHA', '😊', new Date()),
                          new Message(9, 'D01LILY0000', '😊', new Date()),
                        ],
                        [],
                        [
                          new File(1, 'Angular Documentation', 'Miško Hevery', 'Yesterday at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'),
                          new File(2, 'React Documentation', 'Jordan Walke', 'Yesterday at 16:00', 'https://cdn.auth0.com/blog/react-js/react.png'),
                          new File(3, 'Vue', 'Evan You', 'Today at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'),
                          new File(4, 'HTML docs', 'Tim Berners-Lee', 'Oct 20th at 08:10', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')
                        ]
                      ),
      C01TRAINING: new Channel('C01TRAINING',
                        'training',
                        '',
                        'Channel to share training related information and documents.',
                        false,
                        new Date(2020, 8, 4),
                        ['D01SAMANTHA', 'D01JOETRIBI', 'D01GOWTHAMS'],
                        [
                          new Message(1, 'D01SAMANTHA', 'Hey', new Date()),
                          new Message(2, 'D01JOETRIBI', 'How you doin', new Date()),
                          new Message(3, 'D01SAMANTHA', '😊', new Date()),
                        ],
                        [],
                        [
                          new File(1, 'Angular Documentation', 'Miško Hevery', 'Yesterday at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'),
                          new File(2, 'HTML docs', 'Tim Berners-Lee', 'Oct 20th at 08:10', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')
                        ]
                      ),
      C01BUGSLAYE: new Channel('C01BUGSLAYE',
                      'bug-slayers',
                      '',
                      'This is private group. Not a channel.',
                      true,
                      new Date(2020, 11, 3),
                      ['D01JOHNDOE0', 'D01SAMANTHA', 'D01JOETRIBI', 'D01GOWTHAMS'],
                      [
                        new Message(1, 'D01JOHNDOE0', 'Hi', new Date()),
                        new Message(2, 'D01SAMANTHA', 'Hey', new Date()),
                        new Message(3, 'D01JOETRIBI', 'How you doin', new Date()),
                        new Message(4, 'D01SAMANTHA', '😊', new Date()),
                      ],
                      [],
                      [
                        new File(1, 'Angular Documentation', 'Miško Hevery', 'Yesterday at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'),
                        new File(2, 'HTML docs', 'Tim Berners-Lee', 'Oct 20th at 08:10', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')
                      ]
                    )
    };

    this.members = [
      this.users.D01JOHNDOE0,
      this.users.D01AUSTINE0,
      this.users.D01SAMANTHA,
      this.users.D01LILY0000,
      this.users.D01JOETRIBI,
      this.users.D01GOWTHAMS
    ];

    this.files = [
      new File(1, 'Angular Documentation', 'Miško Hevery', 'Yesterday at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'),
      new File(2, 'React Documentation', 'Jordan Walke', 'Yesterday at 16:00', 'https://cdn.auth0.com/blog/react-js/react.png'),
      new File(3, 'Vue', 'Evan You', 'Today at 10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'),
      new File(4, 'HTML docs', 'Tim Berners-Lee', 'Oct 20th at 08:10', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')
    ];

    this.messages = [
      new Message(1, 'D01JOHNDOE0', 'Hi there!', new Date()),
      new Message(2, 'D01AUSTINE0', 'Hey how r u', new Date()),
      new Message(3, 'D01SAMANTHA', 'okay', new Date()),
      new Message(4, 'D01LILY0000', 'thank you', new Date()),
      new Message(5, 'D01JOHNDOE0', 'Here comes Joe...', new Date()),
      new Message(6, 'D01JOETRIBI', 'How you doin', new Date()),
      new Message(7, 'D01AUSTINE0', '😊', new Date()),
      new Message(8, 'D01SAMANTHA', '😊', new Date()),
      new Message(9, 'D01LILY0000', '😊', new Date()),
    ];
  }

  addToCart(msg: string): void {
    this.messages.push(new Message(this.messages.length + 1, 'D01GOWTHAMS', msg, new Date()));
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
