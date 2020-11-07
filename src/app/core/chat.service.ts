import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
    
    

     

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
}
