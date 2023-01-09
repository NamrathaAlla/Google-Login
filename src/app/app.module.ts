import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CardModule } from 'primeng/card';
import { doesNotThrow } from 'assert';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    CustomerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    ButtonModule,
    CardModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              // '36441977099-ja2an35nlb47mp14vo5v9s1rabgnqpaa.apps.googleusercontent.com' 
              '36441977099-jhv4lp1m37bffr128if5gd36k1u0b32d.apps.googleusercontent.com'
              
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("Your-Facebook-app-id")
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// download();

// function download(){
// window.print();
// }