import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user: any;
  loggedIn: any;
  id: any;
  data1: any = []
  data2: any;
  data: any = []
  username: any;
  password: any;
  userdata1: any;
  constructor(private authService: SocialAuthService, public customerService: CustomerService, private route: Router) {

  }

  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });


    this.customerService.besubject.subscribe(d => {
      console.log(d)
      this.username = d;
      this.password = "Nammu@2001"
      console.log(this.username);
      console.log(this.password);
      this.data1 =
      {
        "email": `${this.username}`,
        "password": `${this.password}`
      }
    })
    console.log(this.data1);

    this.customerService.getData1(this.data1).subscribe((x) => {
      console.log(x);
      this.data = x;
      console.log(x);
      console.log(this.data);
    })

  }

  onDelete(id: any) {
    this.customerService.deleteData(id).subscribe(x => {
      console.log("deleted");

      this.route.navigate(['/details'])
    })

  }

  onUpdate(data: any) {
    this.route.navigate(["/update", data])
  }
  logout() {
    this.route.navigate(["/login"])
  }
}
