import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Hotel } from 'src/app/models/hotel';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { HotelService } from 'src/app/services/hotel.service';


interface Room {
  room: string;
  id: string;
  address: string;
  type: string;
  price: number;
  contactMail: string;
  contactPhone: string;
}


@Component({
  selector: 'app-allroom',
  templateUrl: './allroom.component.html',
  styleUrls: ['./allroom.component.css']
})
export class AllroomComponent implements OnInit {

  hotel: Hotel = new Hotel();
  hotelArray: any = [];
  arrays: any = [];
  eMessage: any;

  constructor(private _hotelService: HotelService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllHotels();
  }
  // ngOnChange(){
  //   this.getAllHotels();
  // }

  getAllHotels() {
    this._hotelService.getHotels().subscribe({
      next: data => { this.hotelArray = data },
      error: err => this.eMessage = err
    })
  }

  onDelete(id: any) {
    if (confirm("Are you sure you want to delete this product?") == true) {
      this._hotelService.deleteHotel(id).subscribe(
        (res) => {
          let res_data = JSON.parse(JSON.stringify(res));
          if (res_data.message === 'success') {
            this.getAllHotels();
            this.toastr.success("Delete Product","Deleted successfully" );

          } else {
            this.toastr.error("Error", res_data.message)
          }
        })
    }

  }

}
