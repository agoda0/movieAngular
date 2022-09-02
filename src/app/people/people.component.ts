import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  triendingPeople:any = [];
  pagenum:any;
  totalLength:number = 500;
  constructor(private _TrendingService:TrendingService,private spinner:NgxSpinnerService) { }
  ngOnInit(): void {
    this.getTriendingPeople(1);
  }
  getTriendingPeople(pagenum:any){
    this.spinner.show();
    this._TrendingService.getTriendingPeople(pagenum).subscribe((response)=>{
      this.pagenum = response.page;
      this.triendingPeople = response.results;
      console.log(this.triendingPeople);
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    })
  }

}
