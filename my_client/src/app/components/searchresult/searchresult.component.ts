import { Hotel } from './../../models/hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { FilterService } from 'src/app/services/filter.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  hotel: Hotel = new Hotel();
  hotelArray: any = [];
  arrays: any = [];
  eMessage: string = '';
  filterList: any = [];
  city: any;
  p: number = 1;

  constructor(private _hotelService: HotelService, private _filterService: FilterService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllHotels()

    this.filterList = this._filterService.getFilterList();

  }

  getAllHotels() {
     this._hotelService.getHotels().subscribe({
      next: data => {this.hotelArray = data; this.arrays = data , console.log(this.hotelArray)},
      error: err => this.eMessage = err
    })
  }

  getHotelsByCity(city: any){
    return this._hotelService.getByPlace(city)
  }

  filterArray: any = [];
  tempArray: any = [];

  onChange(event: any) {
  this.p = 1;
    if (event.target.checked) {
      this.filterArray.push(event.target.value);
      this.tempArray = [];
      this.hotelArray = [];
      for (let i = 0; i < this.filterArray.length; i++) {
        this.tempArray.push(this.getHotelHaveFilter(this.filterArray[i]));
      }
      for (let i = 0; i < this.tempArray.length; i++) {
        var firstArray = this.tempArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
          if (this.hotelArray.includes(obj) === false) { this.hotelArray.push(obj) }
        }
      }
      console.log(this.hotelArray)
    }
    else {
      this.filterArray = this.filterArray.filter((a: any) => a != event.target.value);
      this.tempArray = [];
      this.hotelArray = [];
      for (let i = 0; i < this.filterArray.length; i++) {
        this.tempArray.push(this.getHotelHaveFilter(this.filterArray[i]));
      }
      for (let i = 0; i < this.tempArray.length; i++) {
        var firstArray = this.tempArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
          if (this.hotelArray.includes(obj) === false) { this.hotelArray.push(obj) }
        }
      }
      if (this.hotelArray.length == 0) {
        this.hotelArray = this.arrays;
      }
    }
  }

  getHotelHaveFilter(dacdiem: string) {
    return this.arrays.filter((a: any) => {
      if (a.convenient.includes(dacdiem) || dacdiem == '') {
        return a;
      }
    })
    // Trả về chuỗi chứa các ks có đặc điểm muốn lọc
  }

  onSelect(data:any){
    this.router.navigate(['/hotel', data._id]);
      
  }

  pageScroll(){
    window.scroll(0,0);

  }

}
