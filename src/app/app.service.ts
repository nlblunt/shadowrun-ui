import { Injectable } from "@angular/core";
import { AngularTokenService } from "angular-token";
import { Router } from "@angular/router";
import { promise } from "protractor";
import { Promise } from "q";
//import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService {
  userSignedIn: boolean = false;

  constructor(
    public _tokenService: AngularTokenService,
    private router: Router
  ) {
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
