import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-user-single-line',
  templateUrl: './user-single-line.component.html',
  styleUrls: ['./user-single-line.component.scss']
})
export class UserSingleLineComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
