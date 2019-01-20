import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { UseCaseOneComponent } from './use-case-one/use-case-one.component';
import { UseCaseTwoComponent } from './use-case-two/use-case-two.component';
import { UseCaseThreeComponent } from './use-case-three/use-case-three.component';
import { UseCaseFourComponent } from './use-case-four/use-case-four.component';
import { EcosystemOneComponent } from './ecosystem-one/ecosystem-one.component';
import { EcosystemTwoComponent } from './ecosystem-two/ecosystem-two.component';
import { EcosystemThreeComponent } from './ecosystem-three/ecosystem-three.component';
import { EcosystemFourComponent } from './ecosystem-four/ecosystem-four.component';
import { EmergencyResponderComponent } from './emergency-responder/emergency-responder.component';
import { ContactComponent } from './contact/contact.component';
import { AirportSecurityComponent } from './airport-security/airport-security.component';
import { HazmatDataSharingComponent } from './hazmat-data-sharing/hazmat-data-sharing.component';
import { VerifiablePrescriptionsComponent } from './verifiable-prescriptions/verifiable-prescriptions.component';
import { IssuerComponent } from './issuer/issuer.component';
import { VerifierComponent } from './verifier/verifier.component';
import { LedgerComponent } from './ledger/ledger.component';
import { WalletComponent } from './wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    UseCaseOneComponent,
    UseCaseTwoComponent,
    UseCaseThreeComponent,
    UseCaseFourComponent,
    EcosystemOneComponent,
    EcosystemTwoComponent,
    EcosystemThreeComponent,
    EcosystemFourComponent,
    EmergencyResponderComponent,
    ContactComponent,
    AirportSecurityComponent,
    HazmatDataSharingComponent,
    VerifiablePrescriptionsComponent,
    IssuerComponent,
    VerifierComponent,
    LedgerComponent,
    WalletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AboutComponent
      },
      {
        path: 'emergency-responder',
        component: EmergencyResponderComponent
      },
      {
        path: 'airport-security',
        component: AirportSecurityComponent
      },
      {
        path: 'hazmat-data-sharing',
        component: HazmatDataSharingComponent
      },
      {
        path: 'verifiable-prescriptions',
        component: VerifiablePrescriptionsComponent
      },
      {
        path: 'issuer',
        component: IssuerComponent
      },
      {
        path: 'ledger',
        component: LedgerComponent
      },
      {
        path: 'verifier',
        component: VerifierComponent
      },
      {
        path: 'wallet',
        component: WalletComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '**', 
        redirectTo: '', 
        pathMatch: 'full' 
      },
    ],
    {
      scrollPositionRestoration: 'enabled'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
