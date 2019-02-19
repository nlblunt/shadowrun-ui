import { Injectable } from "@angular/core";
import { AngularTokenService } from "angular-token";
import { Router } from "@angular/router";
import { promise } from "protractor";
import { Promise } from "q";
import { HttpClient } from "@angular/common/http";

import { Metatype } from "./models/metatype";

//import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService {
  apiUrl: string = "http://shadowrun-api.herokuapp.com/";
  userSignedIn: boolean = false;

  //DATA STORAGE
  allMetatypes: Metatype[];

  constructor(
    public _tokenService: AngularTokenService,
    private http: HttpClient,
    private router: Router
  ) {}

  GetAllMetatypes() {
    this.allMetatypes = [];

    this.http.get(this.apiUrl + "metatype/index").subscribe(
      res => {
        let result = <any>res;
        this.allMetatypes = result;
        console.log(this.allMetatypes);
        console.log(res);
      },
      error => console.log(error)
    );
  }
}
