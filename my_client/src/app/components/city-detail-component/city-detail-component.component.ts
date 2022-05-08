import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-detail-component',
  templateUrl: './city-detail-component.component.html',
  styleUrls: ['./city-detail-component.component.css']
})
export class CityDetailComponentComponent implements OnInit {
  selectedCity: any;


  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }


  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      let city = params.get('city');
      if (city != null) {
        this.selectedCity = parseInt(city)
      }
    })
  }

}
