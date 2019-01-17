import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public toggleNav = false;
  
  constructor() { }

  ngOnInit() {
  }


}
