import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/core/side-nav.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  appsList =  this.sidenavService.getApps();

  caret = false;

  selectedItem: string;
  selectedItemSubscription: any;

  constructor(private sidenavService: SideNavService) {
    this.selectedItem = this.sidenavService.getSelectedItem();
    this.selectedItemSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.selectedItem = value;
    });
  }

  ngOnInit(): void {
  }

  selectItem(item: string): void {
    this.sidenavService.setSelectedItem(item);
    this.selectedItem = this.sidenavService.getSelectedItem();
  }

}
