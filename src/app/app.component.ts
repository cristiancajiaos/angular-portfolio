import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-portfolio';
  currentRoute: string;
  isSidenavOpened = false;

  navigationItems: any = [
    { name: 'Home', route: 'home' },
    { name: 'About', route: 'about' },
    { name: 'Portfolio', route: 'portfolio'}
  ];

  constructor(
    private location: Location, private router: Router, private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.currentRoute = this.location.path().slice(1);
    });
  }

  isActive(str: string): boolean {
    return (str === this.currentRoute);
  }

  toggleSidenav(): void {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
