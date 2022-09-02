import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies:any = [];
  pagenum:any;
  totalLength:any = 500;
  constructor(private _TrendingService:TrendingService,private spinner:NgxSpinnerService) { }
  ngOnInit(): void {
    this.getTriendingMovies(1);
  }

  getTriendingMovies(pagenum:any){
    this.spinner.show();
    
    this._TrendingService.getTriending('movie',pagenum).subscribe((response)=>{
      this.movies = response.results;
      this.pagenum = response.page;
      console.log(response);
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    })
  }

}
