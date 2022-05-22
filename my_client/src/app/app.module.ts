import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent} from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/SubComponents/header/header.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
=======
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UploadComponent } from './components/upload/upload.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { ForgotPwdComponent } from './components/admin/forgot-pwd/forgot-pwd.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
>>>>>>> 82f634304885baab89f2b24fa8d0947ecdff912d

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent,
<<<<<<< HEAD
   
=======
    FooterComponent,
    
>>>>>>> 82f634304885baab89f2b24fa8d0947ecdff912d

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
<<<<<<< HEAD
    IvyCarouselModule
   
=======
    ReactiveFormsModule
>>>>>>> 82f634304885baab89f2b24fa8d0947ecdff912d
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
