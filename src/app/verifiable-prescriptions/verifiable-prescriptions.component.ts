import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verifiable-prescriptions',
  templateUrl: './verifiable-prescriptions.component.html',
  styleUrls: ['../../scss/use-cases.scss']
})
export class VerifiablePrescriptionsComponent implements OnInit {

  content = {
    sectionOne: {
      sectionTitle: 'Use Cases',
      mainTitle: 'Verifiable Prescriptions',
      mainIcon: 'assets/images/Use-Case-Prescription-Icon.png',
      subTitleOne: `What's the Problem?`,
      textAreaOne: [
        {
          p: `Handwritten prescriptions can be easily forged. Existing digital 
          prescriptions solutions rely on intermediaries between the physician 
          and the pharmacy. They also require a single pharmacy be designated 
          to fill the prescription and don’t enable real-time checking of physician 
          licenses.`
        },
        {
          p: `Pharmacies can face major fines for filling forged prescriptions 
          or prescriptions written by physicians with an expired license.`
        }],
      subTitleTwo: 'Use Case Flow',
      textAreaTwo: '',
      imageOne: 'assets/images/Verifialbe-Prescription-Ecosystem-Diagram-Numbers-Inside.png',
      textAreaThree: [
        {
          p: `1. A medical board issues a digital license to a physician. The 
          physician stores the digital license in their digital wallet.`
        },
        {
          p: `2. The medical board registers the physician license on that 
          physician license blockchain with the status “valid”.`
        },
        {
          p: `3. The physician issues a digital prescription to a patient’s 
          digital wallet.`
        },
        {
          p: `4. The patient presents the digital prescription to the pharmacy. 
          The pharmacy verifies the authenticity of the digital prescription.`
        },
        {
          p: `5. The pharmacy verifies that the physician issuing the prescription 
          has a license that is up to date.`
        },
        {
          p: `6. The pharmacy distributes the medication to the patient.`
        }]
    },
    sectionTwo: {
      title: 'Why Choose Veres',
      card: [
        {
        icon: 'assets/images/icons8-Invisible-128.png',
        title: 'Privacy Aware',
        p: [
          {
            text: 'Patient-physician relationship is preserved by protecting patient data.'
          }]
        },
        {
        icon: 'assets/images/icons8-Clock-128.png',
        title: 'Real Time',
        p: [
          {
            text: 'Up to the second verification of physician licenses.'
          }]
        },
        {
        icon: 'assets/images/icons8-Money-128.png',
        title: 'Lower Costs',
        p: [
          {
            text: 'Eliminates fines and reduces physician license checking fees.'
          }]
        },
        {
        icon: 'assets/images/icons8-Smartphone-Tablet-128.png',
        title: 'No App Required',
        p: [
          {
            text: 'Access your data using a standard Web browser; no app install necessary.'
          }]
        },
        {
        icon: 'assets/images/icons8-Exit-Sign-128.png',
        title: 'No Vendor Lock-in',
        p: [
          {
            text: 'Built on open, international W3C standards.'
          }]
        },
        {
        icon: 'assets/images/icons8-Puzzle-128.png',
        title: 'Interoperable',
        p: [
          {
            text: 'Prescriptions can be accurately verified by any pharmacy.'
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
