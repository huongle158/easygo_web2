import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css', '../../../assets/css/booking.css', '../../../assets/css/base.css']
})
export class BookingComponent implements OnInit {

  selectedId: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      let id = param.get('_id');
      if(id != null)
        this.selectedId = parseInt(id);
    })
  }

}
