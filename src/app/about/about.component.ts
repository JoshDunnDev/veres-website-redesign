import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  useCase = 1;
  ecosystem = 1;

  content = {
    sectionOne: {
      title: 'About',
      text: `
        Veres is a credentialing platform that uses Verifiable Claims 
        technology to digitize any credential that can be stored in a physical 
        wallet. Veres enables more secure and efficient exchange of customer and 
        employee credentials (ID cards, digital offers, receipts, tickets) across 
        a wide variety of industries (government, education, healthcare, financial 
        services). Other benefits include reduced risk and easier regulatory compliance.
      `
    },
    sectionTwo: {
      title: 'Use Cases'
    },
    sectionThree: {
      title: 'Veres Ecosystem'
    },
  };

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
