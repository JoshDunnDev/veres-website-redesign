import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['../../scss/veres-ecosystem.scss', './ledger.component.scss']
})
export class LedgerComponent implements OnInit {

  content = {
    sectionOne: {
      sectionTitle: 'Veres Ecosystem',
      mainTitle: 'What’s A Decentralized Ledger?',
      mainText: [
        {
          p: `A decentralized ledger, also known as a “blockchain”, is a 
          relatively new type of cryptographically protected database. Each 
          entry in the database is called a “block”. Each block is run through 
          a cryptographic algorithm to produce a string of data called a hash. 
          The hash of each block is placed in the following block, creating a 
          chain of blocks. If any data is changed in a block, then the hash of 
          the block and every subsequent block changes too, breaking the chain 
          and exposing the change. This ensures that the database is append-only, 
          tamper-proof, and auditable with a high degree of confidence.`
        }
      ],
      mainImage: 'assets/images/Blockchain-Graphic-Darker-01.png',
      subTitleOne: 'Let’s explore some of the advantages decentralized ledgers have over a centralized databases.',
      subImageOne: 'assets/images/Centralized-Database-Diagram.png',
      textAreaOne: [
        {
          bold: 'Central authority: ',
          p: `all participants trust a single central authority to manage 
          and convey information accurately.`,
        },
        {
          bold: 'No audit trail: ',
          p: `can be altered without detection.`,
        },
        {
          bold: 'Single point of failure: ',
          p: `if the clearing house goes down everyone loses access to the data.`,
        },
        {
          bold: 'Required to be online 24/7: ',
          p: `forces a high-availability guarantee and increases ecosystem costs.`,
        }],
      subTitleTwo: '',
      subImageTwo: 'assets/images/Blockchain-Database-Diagram.png',
      textAreaTwo: [
        {
          bold: 'No central authority: ',
          p: `participants rely on consensus to make decisions, each preserving 
          their own authority.`,
        },
        {
          bold: 'Tamper-proof and auditable: ',
          p: `cryptographic ledgers are immutable; they provide high-integrity, 
          robust, dependable data.`,
        },
        {
          bold: 'Lower maintenance cost: ',
          p: `decentralization and cryptography increases cost sharing and 
          resiliency in the face of failure.`,
        },
        {
          bold: 'Offline access: ',
          p: `cryptography ensures the accuracy of data, allowing it to be 
          accessed from anywhere, not just the original source; can circumvent 
          Internet outages.`,
        }],
      subTitleThree: '',
      subImageThree: 'assets/images/Veres-Ecosystem-Diagram-Cropped-for-Website.png',
      textAreaThree:
        {
          pOne: 'Veres is developing ',
          boldOne: 'fit-for-purpose blockchain technology ',
          pTwo: `that addresses `,
          boldTwo: 'digital credentialing ',
          pThree: `problems in areas such as first responder identification, 
          verifiable prescription writing, retail fraud, and hazardous material 
          information sharing. Fit-for-purpose blockchains augment Issuers, 
          Wallets, and Verifiers to increase the availability and auditability 
          of digital credentials.`
        }
    },
    sectionTwo: {
      title: 'Why Veres Ledger',
      text: `Veres Ledger’s design and use of open standards enables it to be 
      seamlessly combined with Veres’s credentialing software or with other 
      custom built applications.`,
      card: [
        {
        icon: 'assets/images/icons8-Module-128.png',
        title: 'Modular Architecture',
        p: [
          {
            text: 'Your blockchain, optimized for your business needs. Include or exclude various modules or feature sets to create highly effective and secure ledgers.'
          }]
        },
        {
        icon: 'assets/images/icons8-Handshake-128.png',
        title: 'Configurable Authorization',
        p: [
          {
            text: 'Switch between a variety of permissioned and permissionless modes, enabling you to flexibly support different trust models.'
          }]
        },
        {
        icon: 'assets/images/icons8-Positive-Dynamic-128.png',
        title: 'Scaling and Management',
        p: [
          {
            text: 'Our Blockchain-as-a-Service takes care of mundane housekeeping chores and growing pains while you focus on your application.'
          }]
        },
        {
        icon: 'assets/images/icons8-Smartphone-Tablet-128.png',
        title: 'No App Required',
        p: [
          {
            text: 'Access your blockchains using a standard Web browser; no app install necessary, no vendor lock-in.'
          }]
        },
        {
        icon: 'assets/images/icons8-Running-128.png',
        title: 'Rapid Prototyping',
        p: [
          {
            text: 'You can sign up and have your first blockchain running in under a minute.'
          }]
        },
        {
        icon: 'assets/images/icons8-Database-View-128.png',
        title: 'Flexible Data Storage',
        p: [
          {
            text: 'Linked Data technology lets you store an unbounded variety of machine readable data.'
          }]
        }]
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
