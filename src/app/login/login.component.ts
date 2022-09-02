import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)])
  })
  constructor(private _AuthService:AuthService,private _Router:Router,private toastr:ToastrService) { }

  submitLoginForm(){
    if(this.loginForm.invalid){
      return;
    }
    this._AuthService.signIn(this.loginForm.value).subscribe((response)=>
      {
        if(response.message=='success'){
          this.toastr.success( 'login Successfully','Login');
          this._Router.navigateByUrl('/home');
          localStorage.setItem('token',response.token);
        }else{
          this.toastr.warning( `${response.message}`,'Login');
        }
      }
    );
  }
  ngOnInit(): void {
  }

}
