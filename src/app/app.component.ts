import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";
import { Router } from "@angular/router";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Shadowrun";
  newRunner = false; //Creating a new runner (user)?
  userSignedIn = false; //Is the user already signed in?
  login: any = {};
  error: string;

  //Initialize Angular2TokenService

  constructor(
    private _tokenService: Angular2TokenService,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appService.userSignedIn = false;

    this.appService._tokenService.validateToken().subscribe(
      res => {
        console.log(this.appService._tokenService.currentUserData);
        this.appService.userSignedIn = true;
        this.router.navigateByUrl("/runner");
      },
      error => console.log("User not signed in")
    );
  }

  ShowNewRunner(show: boolean) {
    this.newRunner = show;
  }

  runnerSignIn() {
    //Sign in
    this.appService._tokenService
      .signIn({ email: this.login.email, password: this.login.password })
      .subscribe(
        res => {
          this.appService.userSignedIn = true;
          this.router.navigateByUrl("/runner");
        },
        error => (this.error = error)
      );
  }

  runnerRegister() {
    if (this.login.password != this.login.password_confirm) {
      this.error = "Passwords do not match";
      return;
    }

    this.appService._tokenService
      .registerAccount({
        email: this.login.email,
        password: this.login.password,
        passwordConfirmation: this.login.password
      })
      .subscribe(
        res => {
          this.appService.userSignedIn = true;
          this.router.navigateByUrl("/runner");
        },
        error => (this.error = "Error registering new account.")
      );
  }
}
