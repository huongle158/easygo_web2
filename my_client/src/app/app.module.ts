import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent} from './app.component';
import { BookingComponent } from './components/booking/booking.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { HomeComponent } from './components/home/home.component';
import { LocalhostComponent } from './components/localhost/localhost.component';
import { PrivatesiteComponent } from './components/privatesite/privatesite.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents

  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
