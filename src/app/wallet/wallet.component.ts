import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['../../scss/veres-ecosystem.scss', './wallet.component.scss']
})
export class WalletComponent implements OnInit {

  content = {
    sectionOne: {
      sectionTitle: 'Veres Ecosystem',
      mainTitle: 'Veres Wallet',
      mainText: [
        {
          p: `Veres Wallet enables you to securely and privately store your 
          digital credentials. You can use Veres Wallet to receive credentials 
          from Issuers and present them to Verifiers.`
        },
        {
          p: `Veres Wallet is a cloud-based digital wallet that cannot be lost 
          or stolen. It works across all devices. You don’t have to worry about 
          vendor lock-in because your data can be migrated to another wallet 
          provider.`
        }
      ],
      mainImage: '../../assets/images/Veres-Ecosystem-Diagram-Cropped-for-Website.png',
      subTitleOne: '',
      subImageOne: '../../assets/images/Illustrated-Phone-Digital-Wallet.png',
      textAreaOne:
        {
          p: `Veres Wallet stores the digital version of any credential that 
          can be stored in a physical wallet such as:`,
          bullets: [
            {
              item: 'Credit Cards'
            },
            {
              item: `Driver's Licenses`
            },            
            {
              item: 'Coupons'
            },
            {
              item: 'Concert Tickets'
            },
            {
              item: 'Professional Licenses'
            },
            {
              item: 'Loyalty Cards'
            },
            {
              item: 'Prescriptions'
            },
            {
              item: 'Certifications or Degrees'
            }
          ]
        }
    },
    sectionTwo: {
      title: 'White Label Services',
      p: `Veres provides white label services to banks, retailers, and other 
      organizations who want to issue branded wallets and credentials to their 
      customers or employees.`
    },
    sectionThree: {
      title: 'A Better Wallet',
      card: [
        {
        icon: '../../assets/images/icons8-Lock-2-128.png',
        title: 'Secure',
        p: [
          {
            text: 'Your digital wallet cannot be lost or stolen because it is stored in a secured personal cloud.'
          }]
        },
        {
        icon: '../../assets/images/icons8-Exit-Sign-128.png',
        title: 'No Lock-in',
        p: [
          {
            text: 'You can move all of your data to another digital wallet provider at any time. We don’t lock you into our service.'
          }]
        },
        {
        icon: '../../assets/images/icons8-Settings-Filled-128.png',
        title: 'Control',
        p: [
          {
            text: 'Store and share what you want, get notifications from who you want, and transact on your terms.'
          }]
        },
        {
        icon: '../../assets/images/icons8-Smartphone-Tablet-128.png',
        title: 'Any Device',
        p: [
          {
            text: 'Access your personal cloud wallet from any of your devices. No app install necessary.'
          }]
        },
        {
        icon: '../../assets/images/icons8-Invisible-128.png',
        title: 'Private',
        p: [
          {
            text: 'Unlike the competition, we don’t mine and resell your data.'
          }]
        },
        {
        icon: '../../assets/images/Free.png',
        title: 'Free Option',
        p: [
          {
            text: 'There is no risk in joining. The free wallet option will always be free. '
          }]
        }]
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
