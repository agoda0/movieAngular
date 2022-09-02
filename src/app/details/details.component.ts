import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  today: Date = new Date();
  id: number = 0;
  mediaType: any;
  poster_path: string = '';
  original_title: string = '';
  tagline: string = '';
  genres: any;
  vote_average: number = 0;
  vote_count: number = 0;
  popularity: number = 0;
  overview: string = '';
  movies: any = [];
  tvshows: any = [];
  gender: string = 'Male';
  constructor(private _ActivatedRoute: ActivatedRoute, private _TrendingService: TrendingService, private spinner: NgxSpinnerService) {

  }

  respo: any;
  ngOnInit(): void {
    this.spinner.show();
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.mediaType = this._ActivatedRoute.snapshot.params['mediaType'];

    this._TrendingService.getTrinendingDetails(this.mediaType, this.id).subscribe((response) => {
      if (this.mediaType == 'movie' || this.mediaType == 'tv') {
        this.poster_path = response.poster_path;
        this.genres = response.genres;
        this.vote_average = Math.round(response.vote_average);
        this.vote_count = Math.round(response.vote_count);
        this.popularity = response.popularity;
        this.respo = response;
      } else {
        this.respo = response;
        if (this.respo.gender == 1) {
          this.gender = 'Female';
        } else {
          this.gender = 'Male';
        }
        this.calcAge();
        this.getPersonMovies(this.respo.id);
        this.getPersonTv(this.respo.id)
      }
      this.spinner.hide();
    });
  }

  kindShow() {
    if (this.mediaType == 'movie' || this.mediaType == 'tv') {
      return true;
    } else {
      return false;
    }
  }
  calcAge() {
    let totadMille = this.today.getTime();
    let birthdateMille = Date.parse(this.respo.birthday);
    let result = Math.floor((totadMille - birthdateMille) / (1000 * 60 * 60 * 24 * 365));
    return result;
  }
  getPersonMovies(id: number) {
    this._TrendingService.getPersonMovies(id).subscribe((response) => {
      this.movies = response.cast;
    });
  }
  getPersonTv(id: number) {
    this._TrendingService.getPersonTv(id).subscribe((response) => {
      this.tvshows = response.cast;
    });
  }

  convertDate(date: string) {
    if (date == "") {
      return "N/A";
    } else {
      let result = new Date(date);
      return result.getFullYear();
    }

  }
}
