import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airport-security',
  templateUrl: './airport-security.component.html',
  styleUrls: ['../../scss/use-cases.scss']
})
export class AirportSecurityComponent implements OnInit {

  content = {
    sectionOne: {
      sectionTitle: 'Use Cases',
      mainTitle: 'Airport Security Checkpoint Tracking',
      mainIcon: '../../assets/images/Use-Case-Airport-Icon.png',
      subTitleOne: `What's the Problem?`,
      textAreaOne: {
        pOne: `
          When international air travelers arrive at airports and check into their 
          flights, their passports are scanned by TSA agents. In many cases, these 
          passport scans are stored in airport databases for months at a time. These 
          scans are huge treasure troves of information that, if obtained unlawfully, 
          could result in tens of thousands of stolen identities.
        `,
        pTwo: `
          No effective mechanism has been implemented to ensure that the passenger 
          who checked into the airline is the same one getting on the plane. 
          Studies show airport security personnel“ are only 85% accurate when 
          matching travelers to their photo IDs. As a result, airports and airlines 
          are vulnerable to terrorism and customs duty fraud.
        `
      },
      subTitleTwo: 'Use Case Flow',
      textAreaTwo: `
        Veres anonymizes biometric data and binds it with a boarding pass identifier 
        by writing them to a blockchain database. The result is a fully auditable 
        database recording passenger checkpoint events. This improves security and 
        introduces various economic benefits.
      `,
      imageOne: '../../assets/images/Airport-Security-Ecosystem-03-1.png',
      textAreaThree: [
        {
          p: `1. An airline’s boarding pass kiosk verifies a passenger’s identity 
          and collects the their biometric data via a face scan or fingerprint. 
          The kiosk uses an algorithm to analyze this data and creates a unique 
          numeric string called a hash.`
        },
        {
          p: `2. The hash and a unique boarding pass identifier are written to 
          the airport security blockchain. It is important to note that neither 
          the boarding pass identifier nor the hash contain personally 
          identifiable information.`
        },
        {
          p: `3. The passenger proceeds through routine airport checkpoints. 
          At each checkpoint, the same biometric scan is performed and software 
          verifies that the resulting hash of the biometric scan matches, the 
          boarding pass identifier matches, and each preceding checkpoint has 
          been cleared in the proper order.`
        },
        {
          p: `4. The boarding gate is the final checkpoint. The passenger’s 
          boarding pass identifier, biometric data, and whether or not they 
          have cleared all of the required checkpoints in the proper order 
          is checked one last time.`
        },
        {
          p: `5. If all of the checkpoints have been successfully cleared 
          in the proper order the passenger is permitted to board the flight.`
        }]
    },
    sectionTwo: {
      title: 'Why Choose Veres',
      card: [
        {
        icon: '../../assets/images/icons8-Lock-2-128.png',
        title: 'Secure',
        p: [
          {
            text: 'Binding a boarding pass with biometric data dramatically increases the chance that the same person who checked in at the kiosk is the same person boarding the flight.'
          },
          {
            text: 'Blockchain technology provides an immutable and auditable log of what each checkpoint software and/or personnel checked and when.'
          }]
        },
        {
        icon: '../../assets/images/icons8-Money-128.png',
        title: 'Economical',
        p: [
          {
            text: 'This approach enables airports to allow international travelers to leave preclearance zones and know that those returning to the gate are the same ones that cleared security.'
          },
          {
            text: 'This capability also allows any gate to serve international flights.'
          }]
        },
        {
        icon: '../../assets/images/icons8-Thumbs-Up-128.png',
        title: 'Convenient',
        p: [
          {
            text: 'Using a blockchain enables identity information to be captured and shared across borders without the need to store or communicate personally identifiable information.'
          }]
        },
        {
        icon: '../../assets/images/icons8-Invisible-128.png',
        title: 'Privacy Protecting',
        p: [
          {
            text: 'Using a pseudonymous biometric hash and boarding pass identifier enables the tracking of each individual without the need to store personally identifiable information.'
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
