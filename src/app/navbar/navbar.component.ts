import { Component, OnInit } from '@angular/core';
import { HostListener} from "@angular/core";

@Component({
  selector: 'comp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public toggleNav = false;
  public toggleUseCasesHover = false;
  public toggleEcoHover = false;
  public toggleToTop = false;
  
  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.toggleToTop = true;
    } else {
      this.toggleToTop = false;
    }
  }

  toTop() {
    window.scrollTo(0,0);
  }


}
