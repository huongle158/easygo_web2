import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

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
