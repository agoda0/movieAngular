import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http:HttpClient){}

  getTriending(mediaType:any,pageNum:any):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=95a3b065395c68c3260921a4edfa19ff&language=en-US&page=${pageNum}`);
  }
  getTrinendingDetails(mediaType:any,id:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=95a3b065395c68c3260921a4edfa19ff&language=en-US`);
  }
  getTriendingPeople(pageNum:any):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/person/popular?api_key=95a3b065395c68c3260921a4edfa19ff&language=en-US&page=${pageNum}`)
  }
  getPersonMovies(id:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=95a3b065395c68c3260921a4edfa19ff&language=en-US`)
  }
  getPersonTv(id:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=95a3b065395c68c3260921a4edfa19ff&language=en-US`)
  }
}
