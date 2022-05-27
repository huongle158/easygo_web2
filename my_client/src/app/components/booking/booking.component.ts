import { Hotel } from './../../models/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css', '../../../assets/css/booking.css', '../../../assets/css/base.css', '../../shared/footer/footer.component.css']
})
export class BookingComponent implements OnInit {
  hotel: any;
  hotels: any = [];
  hotelData: any;
  sameCityArray: any;
  eMessage: string = '';

  selectedId: any;

  constructor(private _service: HotelService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllHotels();

    this.activatedRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null)
        this.selectedId = id
    })

    this.getHotelById(this.selectedId).subscribe((res: any) => {
      // this.hotelData = res;
      this.hotel = res.hotel;
      this.getHotelsByPlace(this.hotel.city).subscribe((res: any) => {
        this.sameCityArray = res
      })
    });

  }

  getAllHotels() {
    this._service.getHotels().subscribe({
      next: data => { this.hotels = data },
      error: err => this.eMessage = err

    })
  }
  getHotelById(id: any) {
    return this._service.getHotelById(id)
  }

  getHotelsByPlace(city: any) {
    return this._service.getByPlace(city)
  }

  onSelect(data:any){
    console.log(data)
    this.router.navigate(['/hotel', data._id])
  }
  // getRoute(id: any) {
  //   console.log(id);
  //   console.log('hotels: ', this.hotels)
  //   this.hotel = this.hotels.filter(x => x._id === id)[0]
  // }

}

