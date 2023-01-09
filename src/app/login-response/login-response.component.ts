import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-response',
  templateUrl: './login-response.component.html',
  styleUrls: ['./login-response.component.css']
})
export class LoginResponseComponent implements OnInit {

  linkedInToken = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.linkedInToken = this.route.snapshot.queryParams["code"];

  }

}
