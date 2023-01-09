import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public besubject = new BehaviorSubject<any>("hello");
  child=false;

  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get("http://localhost:8084/customer-mobiles")
  }

  getData1(data1: any) {
    return this.http.post("http://localhost:8084/customer-mobile", data1)
  }

  demo1(a: any) {
    return this.http.post("http://localhost:8084/get", a)
  }
  demo(a: any) {
    return this.http.get("http://localhost:8084/customer-list");
  }
  retrieve() {
    return this.http.get("http://localhost:8084/customer-list");
  }
  getMobiles() {
    return this.http.get("http://localhost:8084/getmobiles")
  }
  deleteData(data: any) {
    return this.http.delete("http://localhost:8084/remove-user/" + data);
  }

  updateMobile(data: any) {
    return this.http.put("http://localhost:8084/update-mobile/", data);
  }
isLoggedIn()
{
  return this.child 
}

}



