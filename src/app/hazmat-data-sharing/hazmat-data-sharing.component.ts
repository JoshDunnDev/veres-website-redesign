import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hazmat-data-sharing',
  templateUrl: './hazmat-data-sharing.component.html',
  styleUrls: ['../../scss/use-cases.scss']
})
export class HazmatDataSharingComponent implements OnInit {

  content = {
    sectionOne: {
      sectionTitle: 'Use Cases',
      mainTitle: 'Hazmat Data Sharing',
      mainIcon: 'assets/images/Use-Case-Hazmat-Icon.png',
      subTitleOne: `What's the Problem?`,
      textAreaOne: [
        {
          p: `There is currently no cohesive method for sharing location-based 
          hazardous materials data between various stakeholders such as property 
          owners, municipalities, firefighters, and insurance companies.`
        },
        {
          p: `Insurance companies lose money from claims made as a result of 
          injury or loss of life. Property owners pay higher rates as a result 
          of these claims.`
        }],
      subTitleTwo: 'Use Case Flow',
      textAreaTwo: '',
      imageOne: 'assets/images/Hazmat-Data-Sharing-Ecosystem-Diagram.png',
      textAreaThree: [
        {
          p: `1. A property owner stores information about hazardous materials 
          residing at their property with a data repository provider.`
        },
        {
          p: `2. The property owner registers their hazmat data repository on 
          the hazmat data blockchain.`
        },
        {
          p: `3. The insurance company checks the hazmat data blockchain for 
          a listing about a specific property.`
        },
        {
          p: `4. The insurance company requests access to a hazmat data 
          repository based on a listing in the hazmat data blockchain.`
        },
        {
          p: `5. Once hazmat data is confirmed the insurance company provides 
          a discount to the property owner.`
        }]
    },
    sectionTwo: {
      title: 'Why Choose Veres',
      card: [
        {
        icon: 'assets/images/icons8-Thumbs-Up-128.png',
        title: 'Convenient',
        bullets: [
          {
            item: 'Property owner can easily move their data'
          },
          {
            item: 'Emergency responders get the data they need when they need it'
          },
          {
            item: 'Veres is built on open W3C standards, no vendor lock in'
          }]
        },
        {
        icon: 'assets/images/icons8-Lock-2-128.png',
        title: 'Safe & Secure',
        bullets: [
          {
            item: 'Digital Credentials are not easily forged'
          },
          {
            item: 'Data in a blockchain database can’t be altered'
          },
          {
            item: 'Privacy protecting, no sensitive information is stored on the blockchain'
          }]
        },
        {
        icon: 'assets/images/icons8-Module-128.png',
        title: 'Configurable',
        bullets: [
          {
            item: 'Can restrict access to digital resources in an automated way'
          },
          {
            item: `Can message those with specific credentials or training within 
            a defined radius`
          }]
        }]
    },
    sectionThree: {
      title: '',
      card: [
        {
        icon: '',
        title: 'Benefits of Blockchain',
        bullets: [
          {
            item: 'Resilient to attacks'
          },
          {
            item: 'Tamper-proof and auditable'
          },
          {
            item: 'Lower maintenance'
          },
          {
            item: 'Can be accessed offline'
          }]
        },
        {
        icon: '',
        title: 'Benefits of Veres Ledger',
        bullets: [
          {
            item: 'Optimized for each use case'
          },
          {
            item: 'Configurable consensus authorization'
          },
          {
            item: 'Public/Private access',
          },
          {
            item: 'Flexible data storage'
          }]
        }]
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
