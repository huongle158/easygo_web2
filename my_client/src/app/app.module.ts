import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
import { UploadComponent } from './components/upload/upload.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { ForgotPwdComponent } from './components/admin/forgot-pwd/forgot-pwd.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

import { AllroomComponent } from './components/admin/allroom/allroom.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent,
    FooterComponent,
    AllroomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
