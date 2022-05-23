import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import  Admin  from '../../../models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }
  admin = new Admin();


  ngOnInit(): void {
  }

  onLoginSubmit() {
    const admin = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateAdmin(admin).subscribe(data => {
      console.log(data)
    })
  }

}
