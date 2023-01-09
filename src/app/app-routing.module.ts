import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
   { path: '', redirectTo: "login", pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'details', component: DetailsComponent, canActivate: [AuthGuard] },// visit details only if authenticated }
   { path: 'update/:id', component: CustomerUpdateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
