import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  isHome: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(val =>  {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    const segments = this.router.url.split('/');
    this.isHome = (segments[1] === '');

    if (this.isHome) {
      setTimeout(() => {
        this.router.navigate(['', 'client', 'T01AA4Y2QCU', 'C01GENERAL0']);
      }, 1000);
    }
  }

}
