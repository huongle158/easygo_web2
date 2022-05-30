import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FilterService } from 'src/app/services/filter.service';
import { HotelService } from 'src/app/services/hotel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-newroom',
  templateUrl: './newroom.component.html',
  styleUrls: ['./newroom.component.css']
})
export class NewroomComponent implements OnInit {

  files: any = [];
  available: string = "true"

  convenient = [
    { "id":1, "name": "Wi-fi", "value": "Wi-fi" },
    { "id":2,  "name": "Bếp", "value": "Bếp" },
    { "id":3, "name": "Thang máy", "value": "Thang máy" },
    {  "id":4, "name": "Cho phép thú cưng", "value": "Cho phép thú cưng" },
    {  "id":5, "name": "Nước nóng", "value": "Nước nóng" },
    {  "id":6, "name": "Bể bơi", "value": "Bể bơi" },
    {  "id":7, "name": "TV", "value": "TV" },
    {  "id":8, "name": "Sân hoặc ban công", "value": "Sân hoặc ban công" },
    {  "id":9, "name": "Lò sưởi trong nhà", "value": "Lò sưởi trong nhà" }
  ];
  submittedValue: any;
  testForm!: FormGroup;
  subscription!: Subscription;


  constructor(private _formBuilder: FormBuilder, private _hotelService: HotelService, private toastr: ToastrService, private _filterService: FilterService) {

  }

  ngOnInit(): void {
    this.testForm = this.formBuilder()

    const checkboxControl = (this.testForm.controls['convenient'] as FormArray);
    this.subscription = checkboxControl.valueChanges.subscribe(checkbox => {
      checkboxControl.setValue(
        checkboxControl.value.map((value, i) => value ? this.convenient[i].value : false),
        { emitEvent: false }
      );
    });

  }

  onSelectFile(event: any) {
    this.files = [];
    if (event.target.files.length > 0) {
      for (var i = 0; i < event.target.files.length; i++) { 
        this.files.push(event.target.files[i]);
    }
    // console.log(this.files)
    } else {
      this.files = null
    }
  }
  onSubmit(data: any) {
    // console.log("Name":data.name)
    const formData = new FormData();

    const checkboxControl = (this.testForm.controls['convenient'] as FormArray);

    for (var i = 0; i < this.files.length; i++) { 
      formData.append("file", this.files[i]);
    }
    // formData.append("file", this.files);

    formData.append("name", data.name)
    formData.append("price", data.price)
    formData.append("roomid", data.roomid)
    formData.append("numberofpeople", data.number)
    formData.append("description", data.description)
    formData.append("city", data.address)
    formData.append("email", data.email)
    formData.append("safety", data.safety)
    formData.append("rule", data.rule)
    formData.append("convenient", checkboxControl.value.filter(value => !!value))
    formData.append("available", this.available)

    // for(let pair of formData.entries()){
    //   console.log(pair[0],pair[1])
    // }

    this._hotelService.postHotel(formData).subscribe(
      res => {
        let res_data = JSON.parse(JSON.stringify(res));
        if (res_data.message === 'success') { this.toastr.success('Add new room successfully!') }
        else {
          this.toastr.error('Error', res_data.message)
        }
      }
    )

    this.testForm = this.formBuilder();
  }
  formBuilder(){
    return this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', Validators.required],
      roomid: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      address: ['', [Validators.required]],
      convenient: this._formBuilder.array(this.convenient.map(x => false)),
      rule: ['', Validators.required],
      safety: ['', Validators.required],
      number: ['', Validators.required],
      files: ['']
      
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  get addressInput() {
    return this.testForm.controls["address"];
  }
  get nameInput() {
    return this.testForm.controls["name"];
  }
  get emailInput() {
    return this.testForm.controls["email"];
  }
  get phoneInput() {
    return this.testForm.controls["phone"];
  }
  get safetyInput() {
    return this.testForm.controls["safety"];
  }
  get ruleInput() {
    return this.testForm.controls["rule"];
  }
  get priceInput() {
    return this.testForm.controls["price"];
  }
  get numberInput() {
    return this.testForm.controls["number"];
  }
  get descriptionInput() {
    return this.testForm.controls["description"];
  }
  get roomid() {
    return this.testForm.controls["roomid"];
  }

}