import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css', '../../../assets/css/base.css', '../../../assets/css/search-result.css', '../../../assets/css/responsive.css']
})
export class SearchresultComponent implements OnInit {

  hotelId: any;
  hotels: any[] = [];


  constructor(private _service: HotelService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {}
}
