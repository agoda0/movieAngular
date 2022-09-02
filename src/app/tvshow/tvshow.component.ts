import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  pagenum:any;
  tvShows:any = [];
  totalLength:number = 500;
  constructor(private _TrendingService:TrendingService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getTriendingTvShows(1);
  }
  getTriendingTvShows(pagenum:any){
    this.spinner.show();
    
    this._TrendingService.getTriending('tv',pagenum).subscribe((response) => {
      this.pagenum = response.page;
      this.tvShows = response.results;
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    })
  }

}
