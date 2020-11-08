import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../core/side-nav.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {
  
  caret: boolean = false;

  selectedItem: string = this.sidenavService.getSelectedItem();
  
  selectItem(item: string): void {
    this.sidenavService.setSelectedItem(item);
    this.selectedItem = this.sidenavService.getSelectedItem()
  }

  appsList =  this.sidenavService.getApps();

  constructor(private sidenavService: SideNavService) { }

  ngOnInit(): void {
  }

}
