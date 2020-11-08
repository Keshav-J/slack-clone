import { DIR_DOCUMENT } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../core/side-nav.service';

@Component({
  selector: 'app-customise-browse',
  templateUrl: './customise-browse.component.html',
  styleUrls: ['./customise-browse.component.scss']
})
export class CustomiseBrowseComponent implements OnInit {
  customList = this.sidenavService.getCustomBrowses();
  
  selectedItem: string = this.sidenavService.getSelectedItem();
  
  selectItem(item: string): void {
    console.log(item)
    this.sidenavService.setSelectedItem(item);
    this.selectedItem = this.sidenavService.getSelectedItem()
  }

  constructor(private sidenavService: SideNavService) { }
  
  ngOnInit(): void {
  }

}
