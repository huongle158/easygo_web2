import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css', '../../../assets/css/base.css', '../../../assets/css/search-result.css', '../../../assets/css/responsive.css']
})
export class SearchresultComponent implements OnInit {

  hotelId: any;
  hotels: any[] = [];


  constructor(private _service: HotelService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => {this.hotels = data}
    });
    this.activatedRoute.paramMap.subscribe((param) => {
      let id= param.get('id');
      if(id != null){
        this.hotelId = parseInt(id);
      }
    });
    // this.productCate = this.hotels.
  }
  onSelect(data: any):void {
    this.router.navigate(['/booking', data.id]);
  }
}
