import { Hotel } from './../../models/hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HotelService } from 'src/app/services/hotel.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css', '../../../assets/css/booking.css', '../../../assets/css/base.css','../../shared/footer/footer.component.css']
})
export class BookingComponent implements OnInit {
  hotel= new Hotel();
  eMessage: string = '';
  imageURL: string = 'assets/img/hotels/Đà Lạt/Beautiful getaway/1.PNG';

  selectedId: any;
  file:any=null;

  public testForm = this._formBuilder.group({
    guestName: ['', [Validators.required, Validators.minLength(3)]],
    roomName: ['', [Validators.required, Validators.minLength(3)]],
    requires:['',[Validators.required, Validators.minLength(20)]],
    address: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required],Validators.email],
    phone: ['', [Validators.required]],
    date: ['', [Validators.required]],
    number:['', [Validators.required]],
    price: ['', [Validators.required]],
    checkIn:['', [Validators.required]],
    file: ['']
  })


  constructor(private _service: HotelService, private router: Router, private activatedRoute: ActivatedRoute,private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      let id = param.get('_id');
      if(id != null)
        this.selectedId = parseInt(id);
    })
    
    this.getRoute(this.activatedRoute.snapshot.params['_id']);
  }
  // getAllHotels() {
  //   this._service.getHotels().subscribe({
  //     next: data => this.hotels = data,
  //     error: err => this.eMessage = err

  //   })
  // }
  getRoute(_id:any){
    this._service.find(_id).subscribe((res:any)=>{
      this.hotel = res;
    });    
  }
  onSelectFile(event:any){
    if(event.target.files.length>0){
      // console.log("File info",event.target.file[0])
      this.file = event.target.files[0]
    }else{
      this.file=null
    }
  }
onSubmit(data:any){
  // console.log("Name":data.name)
  const formData =new FormData();
  formData.append("guestName",data.guestName)
  formData.append("roomName",data.guestName)
  formData.append("address",data.address)
  formData.append("email",data.email)
  formData.append("phone",data.phone)
  formData.append("number",data.phone)
  formData.append("price",data.price)
  formData.append("date",data.date)
  formData.append("checkIn",data.checkIn)
  formData.append("name",data.name)
  formData.append("requires",data.requires);

  for(let pair of formData.entries()){
    console.log(pair[0],pair[1])
  }
}
get addressInput(){
  return this.testForm.controls["address"];
}
get nameInput(){
  return this.testForm.controls["name"];
}
get guestNameInput(){
  return this.testForm.controls["guestName"];
}
get roomNameInput(){
  return this.testForm.controls["roomName"];
}
get emailInput(){
  return this.testForm.controls["email"];
}
get phoneInput(){
  return this.testForm.controls["phone"];
}
get requiresInput(){
  return this.testForm.controls["name"];
}
get dateInput(){
  return this.testForm.controls["date"];
}
get checkInInput(){
  return this.testForm.controls["checkIn"];
}
get priceInput(){
  return this.testForm.controls["price"];
}
get numberInput(){
  return this.testForm.controls["number"];
}
get descriptionInput(){
  return this.testForm.controls["description"];
}
}

