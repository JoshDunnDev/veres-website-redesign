import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
