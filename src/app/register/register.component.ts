import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)]),
  });


  constructor (private toastr:ToastrService, private _AuthService:AuthService, private _Router:Router ) {
  }
  ngOnInit( ): void {
  }
  submitRegisterForm(){
    if(this.registerForm.invalid){
      return;
    }
    this._AuthService.signUp(this.registerForm.value).subscribe((response)=>{
      if(response.message=='success'){     
        this.toastr.success( 'register successfully','Register');
        this._Router.navigateByUrl('/login');
      }else{
        this.toastr.warning( 'E-mail already registered','register');
      }
    })
  }
}