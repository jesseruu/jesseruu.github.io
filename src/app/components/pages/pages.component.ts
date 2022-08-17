import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {

  pathOne = 'assets/mobile-market.jpg';
  altTextOne = 'Global Mobile Apps Market';
  pathTwo = 'assets/top-app.jpg';
  altTextTwo = 'Top Apps Worldwide';

  constructor() { }

  ngOnInit() { }
}
