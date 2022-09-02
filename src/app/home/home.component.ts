import { Component, OnInit, ViewEncapsulation, ViewChild  } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";
import SwiperCore, { Pagination, SwiperOptions,Navigation, Autoplay } from "swiper";
SwiperCore.use([Pagination,Navigation,Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  triendingMovies:any = [];
  triendingTvshows:any = [];
  triendingPeoples:any = [];
  constructor(private _TrendingService:TrendingService,private spinner:NgxSpinnerService) { }
  getTriendingMovies(pageNum:any){
    this.spinner.show();
    this._TrendingService.getTriending('movie',pageNum).subscribe((response)=>{
      this.triendingMovies = response.results;
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    })
  }
  getTriendingTvshows(pageNum:any){
    this.spinner.show();
    this._TrendingService.getTriending('tv',pageNum).subscribe((response)=>{
      this.triendingTvshows = response.results;
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    })
  }
  getTriendingPeople(pageNum:any){
    this.spinner.show();
    this._TrendingService.getTriendingPeople(pageNum).subscribe((response) =>{
      this.triendingPeoples = response.results;
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    })
  }

  ngOnInit(): void {
    this.getTriendingMovies(1);
    this.getTriendingTvshows(1);
    this.getTriendingPeople(1);
  }

  config:SwiperOptions ={
    spaceBetween: 30,
    grabCursor: true,
    autoplay:{
      delay:1000
    },
    breakpoints: {
      0: {
          slidesPerView: 1.2,
      },
      768: {
          slidesPerView: 2,
      },
      992: {
          slidesPerView: 3,
      },
      1200: {
          slidesPerView: 4.5,
      },
    },
    speed: 2000,
    
  }
config2:SwiperOptions = {
  spaceBetween: 30,
  grabCursor: true,
  autoplay:{
    delay:3000
  },
  breakpoints: {
    0: {
        slidesPerView: 1.2,
    },
    768: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
    },
    1200: {
        slidesPerView: 4.5,
    },
  },
  speed: 2000,
  
}
config3:SwiperOptions = {
  spaceBetween: 30,
  grabCursor: true,
  autoplay:{
    delay:2000
  },
  breakpoints: {
    0: {
        slidesPerView: 1.2,
    },
    768: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
    },
    1200: {
        slidesPerView: 4.5,
    },
  },
  speed: 2000,
  
}



}
