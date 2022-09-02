import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  totalProducts:any = []
  constructor() { }

  ngOnInit(): void {
    for(let i = 1 ;i<20;i++){
      this.totalProducts.push(i);
    }
  }

}
