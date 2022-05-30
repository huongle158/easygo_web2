import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Admin from '../../../models/admin';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-newroom',
  templateUrl: './newroom.component.html',
  styleUrls: ['./newroom.component.css']
})
export class NewroomComponent implements OnInit {
  file:any=null;

  public testForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description:['',[Validators.required, Validators.minLength(20)]],
    address: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required],Validators.email],
    phone: ['', [Validators.required]],

    file: ['']
  })

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
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
  formData.append("name",data.name)
  formData.append("description",data.description)
  formData.append("address",data.address)
  formData.append("email",data.email)
  formData.append("phone",data.phone)
  formData.append("safety",data.safety)
  formData.append("rule",data.rule)
  formData.append("file",this.file);

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
get emailInput(){
  return this.testForm.controls["email"];
}
get phoneInput(){
  return this.testForm.controls["phone"];
}
get safetyInput(){
  return this.testForm.controls["name"];
}
get ruleInput(){
  return this.testForm.controls["rule"];
}
get priceInput(){
  return this.testForm.controls["price"];
}
get numberInput(){
  return this.testForm.controls["price"];
}
get descriptionInput(){
  return this.testForm.controls["description"];
}

}