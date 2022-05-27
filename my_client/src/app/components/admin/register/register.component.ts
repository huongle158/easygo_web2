import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  admin = new Admin();
  constructor() { }

  ngOnInit(): void {
  }

}
