import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/core/side-nav.service';

@Component({
  selector: 'app-customise-browse',
  templateUrl: './customise-browse.component.html',
  styleUrls: ['./customise-browse.component.scss']
})
export class CustomiseBrowseComponent implements OnInit {

  customList = this.sidenavService.getCustomBrowses();

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
    console.log(item);
    this.sidenavService.setSelectedItem(item);
    this.selectedItem = this.sidenavService.getSelectedItem();
  }

}
