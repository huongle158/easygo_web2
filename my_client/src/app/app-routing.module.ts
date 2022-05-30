import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RegisterComponent } from './components/admin/register/register.component';
import { RouterModule, Routes,CanActivate  } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { HomeComponent } from './components/home/home.component';
import { LocalhostComponent } from './components/localhost/localhost.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PrivatesiteComponent } from './components/privatesite/privatesite.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UploadComponent } from './components/upload/upload.component';
import { AllroomComponent } from './components/admin/allroom/allroom.component';
import { NewroomComponent } from './components/admin/newroom/newroom.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { IvyCarouselModule } from 'angular-responsive-carousel';
const routes: Routes = [
  { path: '', redirectTo: '/hotel', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'localhost', component: LocalhostComponent },
  { path: 'privatesite', component: PrivatesiteComponent },

  //Client
  { path: 'hotel', component: SearchresultComponent },
  { path: 'hotel/:id', component: BookingComponent },
  { path: 'booking', component: BookingComponent },

  //Admin
  { path: 'admin/upload', component: UploadComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/register', component: RegisterComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/allroom', component: AllroomComponent },
  { path: 'admin/newroom', component: NewroomComponent },



];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', 
  }),
  JwtModule.forRoot({ // for JwtHelperService
    config: {
      tokenGetter: () => {
        return '';
      }
    }
  })
],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService, JwtHelperService]
})
export class AppRoutingModule {}
export const RoutingComponents = [

  BookingComponent, DiscoverComponent, HomeComponent,LocalhostComponent,PrivatesiteComponent,SearchresultComponent, LoginComponent, UploadComponent, RegisterComponent,
  DashboardComponent,AllroomComponent, NewroomComponent

]