import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-peopleanduser',
  templateUrl: './people-and-user.component.html',
  styleUrls: ['./people-and-user.component.scss']
})
export class PeopleanduserComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
    console.log("hi there");
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog,{height:'40%',width:'40%',panelClass: 'my-panel'});
  }


}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
 

})
export class DialogElementsExampleDialog {}