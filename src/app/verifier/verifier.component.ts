import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verifier',
  templateUrl: './verifier.component.html',
  styleUrls: ['../../scss/veres-ecosystem.scss']
})
export class VerifierComponent implements OnInit {

  content = {
    sectionOne: {
      sectionTitle: 'Veres Ecosystem',
      mainTitle: 'Veres Issuer & Verifier',
      mainText: [
        {
          p: `Veres is a credentialing platform that uses Verifiable Claims 
          technology to digitize any credential that can be stored in a physical 
          wallet. Veres enables more secure and efficient exchange of customer 
          and employee credentials (ID cards, digital offers, receipts, tickets) 
          across a wide variety of industries (government, education, healthcare, 
          financial services). Other benefits include reduced risk and easier 
          regulatory compliance.`
        }
      ],
      mainImage: 'assets/images/Veres-Ecosystem-Diagram-Cropped-for-Website.png',
      subTitleOne: 'Issuer',
      subImageOne: 'assets/images/Veres-Ecosystem-Issuer-Icon.png',
      textAreaOne: [
        {
          p: `Veres Issuer enables organizations to issue digital credentials 
          to customers and employees, who can optionally manage their own 
          information. Organizations no longer carry the responsibility of 
          administering their users’ sensitive data.`,
        },
        {
          p: `A digital credential is made tamper-proof through the use of advanced cryptography.`,
        }],
      subTitleTwo: 'Verifier',
      subImageTwo: 'assets/images/Veres-Ecosystem-Verifier-Icon.png',
      textAreaTwo: [
        {
          p: `Organizations utilize the Veres Verifier to evaluate the 
          authenticity of digital credentials. Veres Verifier uses advanced 
          cryptography to ensure that digital credentials cannot be easily 
          tampered with or forged.`,
        },
        {
          p: `In some cases, credential Issuers may also be credential 
          Verifiers, like when a retailer issues a digital offer and then 
          later verifies that offer during a purchase. In other cases, the 
          Issuer and Verifier may be separate entities, like when a pharmacy 
          verifies the authenticity of a digital prescription that was issued 
          by a physician.`,
        }],
      subTitleThree: 'Veres Issuer and Verifier software can be used for a wide variety of use cases.',
      subImageThree: 'assets/images/Verifiable-Claim-Use-Case-Examples-01-1.png',
      subImageThreeMobile: 'assets/images/Verifiable-Claim-Use-Case-Examples-04.png'
    },
    sectionTwo: {
      title: 'Why Choose Veres',
      card: [
        {
        icon: 'assets/images/icons8-Positive-Dynamic-128.png',
        title: 'Control',
        p: [
          {
            text: 'Anyone can be an issuer; there is no centralized certificate authority.'
          }]
        },
        {
        icon: 'assets/images/icons8-Offline-128.png',
        title: 'Works Offline',
        p: [
          {
            text: 'Issuer does not need to be online for the authenticity of a digital credential to be verified.'
          }]
        },
        {
        icon: 'assets/images/icons8-Smartphone-Tablet-128.png',
        title: 'No App Required',
        p: [
          {
            text: 'No app required; works in any Web browser, access Veres Issuer and Verifier from any device.'
          }]
        },
        {
        icon: 'assets/images/icons8-Database-View-128.png',
        title: 'Flexible Data Storage',
        p: [
          {
            text: 'Linked Data technology lets you store an unbounded variety of machine readable data.'
          }]
        },
        {
        icon: 'assets/images/icons8-SMS-128.png',
        title: 'Messaging Channel',
        p: [
          {
            text: 'Issuers can send messages directly to credential holders, e.g. a fire station notifies firefighters about an emergency.'
          }]
        },
        {
        icon: 'assets/images/icons8-Exit-Sign-128.png',
        title: 'No Vendor Lock-in',
        p: [
          {
            text: 'Built on open, international W3C standards.'
          }]
        }]
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
