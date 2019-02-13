import { Injectable } from "@angular/core";
import { Angular2TokenService } from "angular2-token";
import { Router } from "@angular/router";
import { promise } from "protractor";
import { Promise } from "q";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService {
  userSignedIn: boolean = false;

  constructor(
    public _tokenService: Angular2TokenService,
    private router: Router
  ) {
    this._tokenService.init({
      apiBase: "http://shadowrun-api.herokuapp.com",
      signInRedirect: "/"
    });
    /*
    this._tokenService.validateToken().subscribe(
      res => {
        //console.log(this._tokenService.currentUserData);
        //this.signed_in = true;
        this.router.navigateByUrl("/runner");
      },
      error => console.log("User not signed in")
    );
    */
  }
}
