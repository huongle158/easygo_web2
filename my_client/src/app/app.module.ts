import {NgxPaginationModule} from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';


// import { HeaderComponent } from './components/SubComponents/header/header.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { UploadComponent } from './components/upload/upload.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { NewroomComponent } from './newroom/newroom.component';

import { AllroomComponent } from './components/admin/allroom/allroom.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent,
    FooterComponent,
    AllroomComponent,
    NewroomComponent,

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true
    }),
    IvyCarouselModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule


  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
