import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent,'canActivate':[AuthGuard]},
  {path:"about", component:AboutComponent},
  {path:"movies",component:MoviesComponent,'canActivate':[AuthGuard]},
  {path:"details/:mediaType/:id",component:DetailsComponent,'canActivate':[AuthGuard]},
  {path:"people", component:PeopleComponent,'canActivate':[AuthGuard]},
  {path:"tvshow", component:TvshowComponent,'canActivate':[AuthGuard]},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
