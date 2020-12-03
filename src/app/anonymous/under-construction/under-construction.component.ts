import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SideNavService } from 'src/app/core/side-nav.service';

export class CustomItem {
  iconUrl: string;
  name: string;
  route: string;
}

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  pageName: string;

  customList: CustomItem[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sidenavService: SideNavService) {
    this.route.params.subscribe(val => {
      this.ngOnInit();
    });
    this.customList = this.sidenavService.getCustomBrowses() as CustomItem[];
  }

  ngOnInit(): void {
    const segments = this.router.url.split('/');
    this.sidenavService.setSelectedItem(segments[1]);

    if (this.customList !== undefined) {
      this.customList.forEach(item => {
        if (item.route === segments[1]) {
          this.pageName = item.name;
        }
      });
    }
  }

}
