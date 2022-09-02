import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // isLogin:any;
  constructor(private _Router:Router) { 
    
  }
  isLogin():boolean
  {
    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
    }
  }
  ngOnInit(): void {
    
  }

  logout(){
    localStorage.removeItem('token');
    this._Router.navigateByUrl('/login');
  }

}
