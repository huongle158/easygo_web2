import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { RouterModule } from '@angular/router';
import * as ngxToastr from 'ngx-toastr';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent,
    FooterComponent,
    AdminMenuComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ngxToastr.ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true
    }),
    RouterModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule


  ],
  providers: [IvyCarouselModule],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
