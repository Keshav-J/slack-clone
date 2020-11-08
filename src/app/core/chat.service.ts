import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  users: User[];

  constructor(private http: HttpClient) {
    this.users = [
      new User(1, 'John', 'Doe', true, "assets/profile-pic/profile-pic1.png"),
      new User(2, 'Austine', '', false, "assets/profile-pic/profile-pic2.png"),
      new User(3, 'Samantha', 'Ruth', false, "assets/profile-pic/profile-pic3.png"),
      new User(4, 'Lily', '', true, "assets/profile-pic/profile-pic4.png"),
      new User(5, 'Joe', 'Tribiani', true, "assets/profile-pic/profile-pic5.png")
    ];
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
}
