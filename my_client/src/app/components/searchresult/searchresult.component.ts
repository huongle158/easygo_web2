import { Hotel } from './../../models/hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  hotel: Hotel = new Hotel();
  hotels: any[] = [];
  eMessage: string = '';
  imageURL: string = 'assets/img/hotels/Đà Lạt/Beautiful getaway/1.PNG';

  constructor(private _service: HotelService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllHotels();
  }

  getAllHotels() {
    this._service.getHotels().subscribe({
      next: data => this.hotels = data,
      error: err => this.eMessage = err

    })
  }

}
