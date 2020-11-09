import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from './file';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  users: User[];
  files: File[];

  constructor(private http: HttpClient) {
    this.users = [
      new User(1, 'John', 'Doe', true, "assets/profile-pic/profile-pic1.png"),
      new User(2, 'Austine', '', false, "assets/profile-pic/profile-pic2.png"),
      new User(3, 'Samantha', 'Ruth', false, "assets/profile-pic/profile-pic3.png"),
      new User(4, 'Lily', '', true, "assets/profile-pic/profile-pic4.png"),
      new User(5, 'Joe', 'Tribiani', true, "assets/profile-pic/profile-pic5.png")
    ];

    this.files = [
      new File(1, 'Angular Documentation', 'Miško Hevery', 'Yesterday at 10:00', "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"),
      new File(2, 'React Documentation', 'Jordan Walke', 'Yesterday at 16:00', "https://cdn.auth0.com/blog/react-js/react.png"),
      new File(3, 'Vue', 'Evan You', 'Today at 10:00', "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"),
      new File(4, 'HTML docs', 'Tim Berners-Lee', 'Oct 20th at 08:10', "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png")
    ]
  }

  message=[
    {"id":1,"username":"John","msg":"hi there","profile-pic":"assets/profile-pic/profile-pic1.png","time":new Date()},
    {"id":2,"username":"Austine","msg":"hey how r u","profile-pic":"assets/profile-pic/profile-pic1.png","time":new Date()},
    {"id":3,"username":"Samantha","msg":"okay ","profile-pic":"assets/profile-pic/profile-pic1.png","time":new Date()},
    {"id":4,"username":"Lily","msg":"thank you sir","profile-pic":"assets/profile-pic/profile-pic1.png","time":new Date()},
    {"id":1,"username":"John","msg":"hi there","profile-pic":"assets/profile-pic/profile-pic1.png","time":new Date()},
    {"id":2,"username":"Austine","msg":"hey how r u","profile-pic":"assets/profile-pic/profile-pic1.png","time":new Date()},
    {"id":3,"username":"Samantha","msg":"okay ","profile-pic":"assets/profile-pic/profile-pic1.png","time":new Date()},
    {"id":4,"username":"Lily","msg":"thank you sir","profile-pic":"assets/profile-pic/profile-pic1.png","time":new Date()}
  ]  


  addToCart(msg) {
    this.message.push({"id":1,"username":"gowtham","msg":msg,"profile-pic":"","time":new Date()},);
    
  }

  getMessages() {
    return this.message;
  }

  getUsers() {
    return this.users;
  }

  getFiles() {
    return this.files;
  }
}
