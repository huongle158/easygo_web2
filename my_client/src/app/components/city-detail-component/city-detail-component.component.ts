import { TestCity } from '../../models/testcity';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import cityList from '../../../assets/data/city.json'
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-detail-component',
  templateUrl: './city-detail-component.component.html',
  styleUrls: ['./city-detail-component.component.css', '../../../assets/css/base.css', '../../../assets/css/responsive.css', '../../../assets/css/style.css',]
})
export class CityDetailComponentComponent implements OnInit {
  selectedCity: any;
  item: TestCity | undefined;
  testitem: any;
  hotelList: any;
  citys: any;
  errMsg: any;


  constructor(private _service: CityService,private _activatedRoute: ActivatedRoute, private _router: Router) { 
    // console.log(cityList)
  }


  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      let city = params.get('city');
      if (city != null) {
        this.selectedCity = city
      }
    })
    // Getdata
    this._service.getCityData().subscribe(
      // data => this.drinks = data
      {
        next: data => {
          this.item = data.find(cityItem => cityItem.city === this.selectedCity)
          console.log(this.item)
          this.hotelList = this.item?.hotel
          console.log("~ hotelList", this.hotelList)
          
          return this.citys = data
        },
        error: err => this.errMsg = err
      }
    )
    
      this.item = this.citys.find(cityItem => cityItem.city === this.selectedCity)
      console.log(this.item)
    

    
  }

}
