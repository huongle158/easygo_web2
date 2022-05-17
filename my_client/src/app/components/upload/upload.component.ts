import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public testForm = this._formBuilder.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    file: ['']
  })

  nameInput: any;
  file: any;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.nameInput = this.getName();
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
    else {
      this.file = null;
    }
  }

  getName() {
    return this.testForm.controls['name']
  }

  onSubmit(data: any) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("file", this.file)

    console.log("form data", formData)
    for(let pair of formData.entries()){
      console.log(pair[0], pair[1])
    }
  }

}
