import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../assets/css/base.css', '../../../assets/css/responsive.css', '../../../assets/css/style.css',]
})
export class HomeComponent implements OnInit {
  // Khởi tạo các giá trị dùng chung ở đây
  citys: any;
  errMsg: any;
  selectedCity: any;
  constructor(private _service: CityService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      let city = params.get('city');
      if (city != null) {
        this.selectedCity = city;
      }
    })
    this._service.getCityData().subscribe(
      // data => this.drinks = data
      {
        next: data => this.citys = data,
        error: err => this.errMsg = err
      }
    )
  }
  onSelected(data: any) {
    this._router.navigate(['/hotel', data.place])
  }
  isSelected(data: any) {
    return data.city === this.selectedCity;
  }

}
