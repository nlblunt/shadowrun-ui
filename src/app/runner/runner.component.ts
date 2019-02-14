import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Router } from "@angular/router";

//MODELS
import { Runner } from "../models/runner";
import { Metatype } from "../models/metatype";

@Component({
  selector: "app-runner",
  templateUrl: "./runner.component.html",
  styleUrls: ["./runner.component.css"]
})
export class RunnerComponent implements OnInit {
  //TEST METATYPE
  allMetatypes: Metatype[]= [
  {id: 1, name: 'Human', body_start: 1, agility_start: 1},
  {id: 2, name: 'Elf', body_start: 1, agility_start: 2}];

  userData: any; //Current User
  creatingNewRunner: boolean = false;  //Are we creating a new runner?
  newRunner: any = {};  //Holds runner data
  //allMetatypes: Metatype[];  //Holds all the Metatypes

  constructor(public appService: AppService, private router: Router) {}

  ngOnInit() {
    this.userData = this.appService._tokenService.currentUserData;
    console.log(this.userData);
  }

  //Logout and return to main page
  Logout() {
    this.appService._tokenService.signOut();
    this.appService.userSignedIn = false;
    this.router.navigateByUrl("/");
  }

  //Sets if we are creating a new runner for the user
  SetNewRunner(state: boolean) {
    this.creatingNewRunner = state;

    //If we are creating a new runner, initialize newRunner
    if (state == true) {
      this.newRunner = {};

	//Get a list of all metatypes from the server
	//TEST DATA
    }
  }
}
