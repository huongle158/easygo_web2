import { Hotel } from './../../models/hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HotelService } from 'src/app/services/hotel.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css', '../../../assets/css/booking.css', '../../../assets/css/base.css','../../shared/footer/footer.component.css']
})
export class BookingComponent implements OnInit {
  hotel= new Hotel();
  eMessage: string = '';
  imageURL: string = 'assets/img/hotels/Đà Lạt/Beautiful getaway/1.PNG';

  constructor(private _service: HotelService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.getAllHotels()
    this.getRoute(this.activatedRoute.snapshot.params['_id']);
  }
  // getAllHotels() {
  //   this._service.getHotels().subscribe({
  //     next: data => this.hotels = data,
  //     error: err => this.eMessage = err

  //   })
  // }
  getRoute(_id:any){
    this._service.find(_id).subscribe((res:any)=>{
      this.hotel = res;
    });    
  }

}

