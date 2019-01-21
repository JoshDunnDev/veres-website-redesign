import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-responder',
  templateUrl: './emergency-responder.component.html',
  styleUrls: ['../../scss/use-cases.scss']
})
export class EmergencyResponderComponent implements OnInit {

  content = {
    sectionOne: {
      sectionTitle: 'Use Cases',
      mainTitle: 'Emergency Responder Credential Verification',
      mainIcon: 'assets/images/Use-Case-Responder-Icon.png',
      subTitleOne: `What's the Problem?`,
      textAreaOne: `
        There is currently no fast, reliable way for checkpoint 
        personnel to verify whether emergency responders are cleared to enter 
        restricted areas. Checkpoint personnel must also be able to detect the 
        use of fraudulent or unwarranted credentials. Only on-duty, appropriately 
        trained personnel should gain access to restricted areas.
      `,
      subTitleTwo: 'Use Case Flow',
      textAreaTwo: `
        Veres solutions are applicable to all emergency responders, 
        including law enforcement, emergency medical services, and the National 
        Guard. The following example pertains to fire rescue.
      `,
      imageOne: 'assets/images/Emergency-Responder-Ecosystem.png',
      textAreaThree: [
        {
          p: `1. A fire station issues a digital ID card to a firefighter. 
        The firefighter stores it on their mobile phone.`
        },
        {
          p: `2. The fire station uploads non-personally identifiable 
          information, such as badge ID and training qualifications, from the 
          digital ID card to the blockchain.`
        },
        {
          p: `3. The firefighter responds to a fire and provides their 
          ID number (either in digital or physical form) to a security guard 
          before entering a restricted area. The security guard uses a mobile 
          device to check the blockchain for the firefighter’s credential and 
          training.`
        },
        {
          p: `4. If the security guard’s mobile device returns a “VALID” 
          response from the blockchain, the firefighter is authorized to access 
          the area.`
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
            item: 'Check credentials anywhere, anytime — even offline'
          },
          {
            item: 'Reduce human error through automated digital credential verification'
          },
          {
            item: 'Avoid vendor lock-in; Veres technology is based on open international W3C standards'
          }]
        },
        {
        icon: 'assets/images/icons8-Lock-2-128.png',
        title: 'Safe & Secure',
        bullets: [
          {
            item: 'Prevent credential forgery with advanced cryptography'
          },
          {
            item: 'Store and audit immutable data using blockchain technology'
          },
          {
            item: 'Streamline check-in process'
          },
          {
            item: 'Reduce unauthorized access through robust credential verification'
          },
          {
            item: 'Reduce cyber threats; only non-personally identifiable information is stored on the blockchain'
          }]
        },
        {
        icon: 'assets/images/icons8-Module-128.png',
        title: 'Configurable',
        bullets: [
          {
            item: 'Create custom rules for accessing digital resources'
          },
          {
            item: 'Target messaging based on specific training credentials within a defined radius'
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
        icon: 'assets/images/Veres-Ecosystem-Issuer-Icon.png',
        title: '',
        p: `The data on the digital ID card is made tamper-proof through 
            the use of advanced cryptography.`
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
