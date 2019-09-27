import { Component, OnInit } from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[] = [];  

  constructor() { }

  ngOnInit() {
    this.users.push(new User("Ashish","blue",["Portrait", "Landscape"]));
    this.users.push(new User("Sajal","red",["Oil Painting", "Landscape"]));
    this.users.push(new User("Akhil","green",[]));
  }

}
