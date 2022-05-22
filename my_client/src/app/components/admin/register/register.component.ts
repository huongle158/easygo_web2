import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/admin';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  constructor() { }

  ngOnInit(): void {
  }

}
