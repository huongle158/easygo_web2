// import { AppRoutingModule } from './app-routing.module';
import { ForgotPwdComponent } from './components/admin/forgot-pwd/forgot-pwd.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { CityDetailComponentComponent } from './components/city-detail-component/city-detail-component.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { HomeComponent } from './components/home/home.component';
import { LocalhostComponent } from './components/localhost/localhost.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PrivatesiteComponent } from './components/privatesite/privatesite.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UploadComponent } from './components/upload/upload.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AllroomComponent } from './components/admin/allroom/allroom.component';
const routes: Routes = [
  { path: '', redirectTo: '/hotel', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'localhost', component: LocalhostComponent },
  { path: 'privatesite', component: PrivatesiteComponent },

 

  //Client
  { path: 'hotel', component: SearchresultComponent },
  { path: 'hotel/:id', component: BookingComponent },

  //Admin
  { path: 'admin/upload', component: UploadComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/register', component: RegisterComponent },
  { path: 'admin/forgot-pwd', component: ForgotPwdComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/allroom', component: AllroomComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes), IvyCarouselModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [

  BookingComponent, DiscoverComponent, HomeComponent,LocalhostComponent,PrivatesiteComponent,SearchresultComponent, LoginComponent, UploadComponent, CityDetailComponentComponent,
  RegisterComponent,
  ForgotPwdComponent,
  DashboardComponent,AllroomComponent

]