import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent} from './app.component';
import { BookingComponent } from './booking/booking.component';
import { DiscoverComponent } from './discover/discover.component';
import { HomeComponent } from './home/home.component';
import { LocalhostComponent } from './localhost/localhost.component';
import { PrivatesiteComponent } from './privatesite/privatesite.component';
import { SearchresultComponent } from './searchresult/searchresult.component';

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
