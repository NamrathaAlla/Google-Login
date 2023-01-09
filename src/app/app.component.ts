import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google-Login';
  user: any;
  loggedIn: any;
  userData: any
  
  constructor(private authService: SocialAuthService) { }

   ngOnInit() {
  //   // this.authService.authState.subscribe((user) => {
  //   //   this.user = user;
  //   //   this.loggedIn = (user != null);
  //   //   console.log(this.user)
  //   // });
  }
 
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider:any;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.authService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        this.userData = userData;
            this.loggedIn = (userData != null);
            console.log(this.user)
            
      }
    );
  }
}