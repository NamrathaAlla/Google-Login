import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private cservice:CustomerService,private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (this.cservice.isLoggedIn()) {
         // go to details if not authenticated
        return true;
      }
      else{
        alert("You are not supposed to enter that page without credentials...!!!")
        this.router.navigate([''])
        return false;
      }
    return true;
  }
  
}
