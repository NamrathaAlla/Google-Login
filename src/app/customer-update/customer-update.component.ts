import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  data: any;
  update: FormGroup
  cname: any
  usrmail: any
  mobileid: any
  mobilenm: any
  pro: any
  qty: any
  prc: any
  id: any
  userData: any
  show = false

  constructor(private route: Router, public formBuilder: FormBuilder, private act: ActivatedRoute, private ss: CustomerService) {
    this.update = this.formBuilder.group({
      mobileid: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      mobilename: ['', [Validators.required]],
      provider: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]]

    })
  }


  ngOnInit(): void {
    this.id = this.act.snapshot.params.id;
    console.log(this.id);

    this.ss.retrieve().subscribe((x) => {
      this.data = x;
      console.log(x);
      console.log(this.data);

      let a = this.data.filter((x: any) => x.mobileid == this.id)
      console.log(a);
      this.dataPatch(a);

    })
  }

  onUpdate() {
    console.log(this.update.value);
    this.ss.updateMobile(this.update.value).subscribe((x) => {
      console.log("Updated");
      this.route.navigate(['/customer'])
    })

  }

  dataPatch(a: any) {
    console.log(a);
    // this.update.controls.mobileid.patchValue(a[0].mobileid)
    // this.update.controls.mobilename.patchValue(a[0].mobilename)
    // this.update.controls.provider.patchValue(a[0].provider)
    // this.update.controls.quantity.patchValue(a[0].quantity)  
    // this.update.controls.price.patchValue(a[0].price)

    this.update.patchValue({
      mobileid: a[0].mobileid,
      mobilename: a[0].mobilename,
      provider: a[0].provider,
      quantity: a[0].quantity,
      price: a[0].price
    })
  }


}
