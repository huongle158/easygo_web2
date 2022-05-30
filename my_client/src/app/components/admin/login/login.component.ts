import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) { }

  public loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
  dataLogin: any;

  ngOnInit(): void {
  }

  onLoginSubmit() {
    const admin = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this.authService.authenticateAdmin(admin).subscribe(data => {
      this.dataLogin = data;
      console.log(data)
      if(this.dataLogin.success){
        this.authService.storeAdminData(this.dataLogin.token, this.dataLogin.admin);
        this.toastr.success('Login successfully!');
        this.router.navigate(['/admin/dashboard']);

      }
      else{
        this.toastr.error(this.dataLogin.msg, "Login Error");
        this.router.navigate(['/admin/login']);
      }

    })
  }

}
