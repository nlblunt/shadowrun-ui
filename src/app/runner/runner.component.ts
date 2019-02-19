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
  userData: any; //Current User
  creatingNewRunner: boolean = false; //Are we creating a new runner?
  newRunner: any = {}; //Holds runner data
  //allMetatypes: Metatype[];  //Holds all the Metatypes

  metaSelected: any = {};

  constructor(public appService: AppService, private router: Router) {}

  ngOnInit() {
    this.userData = this.appService._tokenService.currentUserData;

    //Get the metatypes from the server for future use
    this.appService.GetAllMetatypes();
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
    this.metaSelected = this.appService.allMetatypes[0];

    //If we are creating a new runner, initialize newRunner
    if (state == true) {
      this.newRunner = {};
    }
  }

  SelectMetatype(index: number) {
    this.metaSelected = this.appService.allMetatypes[index - 1];
  }
}
