import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  useCase = 1;
  ecosystem = 1;

  constructor() { }

  ngOnInit() {
  }

  changeUseCase(val) {
    this.useCase = val;
  }

  changeEcosystem(val) {
    this.ecosystem = val;
  }

}
