import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bookings: any

  constructor(private _bookService: BookingService, private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this._authService.getDashboard().subscribe(dash =>{
      
    })
    this.getAllBooking();
  }
  
  getAllBooking(){
    this._bookService.getBookings().subscribe(res => this.bookings = res)
  }

}
