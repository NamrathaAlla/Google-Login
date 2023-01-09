import {  FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any
  loggedIn: any
  signin: FormGroup;
  userResult: any = [];

  linkedInCredentials = {
    clientId: "7842qguezy9a7e",
    redirectUrl: "http://localhost:4200/details",
    scope: "r_liteprofile%20r_emailaddress%20w_member_social" // To read basic user profile data and email
  };

  constructor(private authService: SocialAuthService, private router: Router, public formBuilder: FormBuilder, public customerService: CustomerService, private http: HttpClient) {
    this.signin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z._%+-]+@[gmail]+\.com*$/), Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.pattern('^[\\sa-zA-Z0-9@$]*$'), Validators.minLength(3)]]
    })
  }

  login() {


    window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${this.linkedInCredentials.clientId
      }&redirect_uri=${this.linkedInCredentials.redirectUrl}&scope={this.linkedInCredentials.scope}`;
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });

  }
  onChange(item: any) {

    this.customerService.child = true
    console.log("details");

    // this.router.navigate(["/details"])
    // console.log(item.email);
    console.log(this.user.email);

    this.customerService.demo(this.user.email).subscribe((data) => {
      console.log(data)
      this.userResult = data
      console.log(this.userResult);

      console.log(this.userResult.map((x: any) => x.email));
      let listData = this.userResult.map((x: any) => x.email)


      this.userResult.forEach((element: {
        password: boolean; email: any;
      }) => {
        if (element?.email == this.user?.email) {

          console.log(element.email == this.user.email);
          this.router.navigate(["/details"])
          this.customerService.besubject.next(this.user?.email);

          // this.router.navigate(['/customer'])
          console.log("details");

        }
        else {
          console.log("invalid credentials")
        }
      });

    }
    )
  }
  getData(item: any) {

    console.log(item.email);
    this.customerService.demo(item).subscribe((data) => {
      console.log(data)
      this.userResult = data
      console.log(this.userResult);

      console.log(this.userResult.map((x: any) => x.email));
      let listData = this.userResult.map((x: any) => x.email)


      this.userResult.forEach((element: {
        password: boolean; email: any;
      }) => {
        if (element.email == item.email) {

          this.customerService.besubject.next(item);

          this.router.navigate(['/customer'])
        }
        else {
          window.alert("invalid credentials")
        }
      });




    }
    )
  }
}
