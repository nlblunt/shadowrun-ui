//Import MODULES
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Import COMPONENTS
import { AppComponent } from "./app.component";
import { RunnerComponent } from "./runner/runner.component";

//Import SERVICES
import { Angular2TokenService } from "angular2-token";

//import { PlayerLoginComponent } from './player/player-login/player-login.component';
//import { PcCreateComponent } from './player/pc-create/pc-create.component';
//import { HomeComponent } from './home.component';
//import { PcViewComponent } from './player/pc-view/pc-view.component';
//import { PlayerAuthGuard } from './guards/player-auth.guard';

//import { GMComponent } from './gm/gm.component';
//import { GMLoginComponent } from './gm/gm-login/gm-login.component';
//import { GMViewComponent } from './gm/gm-view/gm-view.component';
//import { GMAuthGuard } from './guards/gm-auth.guard';

//import { DashboardComponent } from './dashboard.component';
//import { HeroesComponent } from './heroes.component';
//import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: 'full' },
  // path: 'home', component: HomeComponent },
  {
    path: "runner",
    component: RunnerComponent,
    canActivate: [Angular2TokenService]
  },
  //{ path: 'player-login', component: PlayerLoginComponent },
  //{ path: 'player/pc-create', component: PcCreateComponent },
  //{ path: 'player/pc-view', component: PcViewComponent },
  //{ path: 'gm', component: GMComponent, canActivate: [GMAuthGuard]},
  //{ path: 'gm-login', component: GMLoginComponent},
  //{ path: 'gm/gm-view', component: GMViewComponent },
  //{ path: 'dashboard',  component: DashboardComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes',     component: HeroesComponent }
  { path: "", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
