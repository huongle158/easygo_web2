import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { HomeComponent } from './components/home/home.component';
import { LocalhostComponent } from './components/localhost/localhost.component';
import { PrivatesiteComponent } from './components/privatesite/privatesite.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'discover', component: DiscoverComponent },
  // Chưa tạo
  { path: 'localhost', component: LocalhostComponent },
  { path: 'privatesite', component: PrivatesiteComponent },
  { path: 'searchresult', component: SearchresultComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  BookingComponent, DiscoverComponent,HomeComponent,LocalhostComponent,PrivatesiteComponent,SearchresultComponent
]