import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../../core/side-nav.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {

  name: String
  nameValueSubscription: any;
  
  starred: boolean = false;
  constructor(private sidenavService: SideNavService) {
    this.name = this.sidenavService.getSelectedItem()
    this.nameValueSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.name = value
  })
   }

  ngOnInit(): void {
  }
  makeStar() {
    this.starred = !this.starred;
  }
}
