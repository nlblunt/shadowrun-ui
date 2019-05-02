import { Injectable } from "@angular/core";
import { AngularTokenService } from "angular-token";
import { Router } from "@angular/router";
import { promise } from "protractor";
import { Promise } from "q";
import { HttpClient } from "@angular/common/http";

//MODELS
import { Metatype } from "./models/metatype";
import { Skill } from "./models/skill";

//import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService {
  //apiUrl: string = "http://shadowrun-api.herokuapp.com/";
  apiUrl: string = "https://shadowrun-api.herokuapp.com/";
  userSignedIn: boolean = false;

  //DATA STORAGE
  allMetatypes: Metatype[];
  allSkills: Skill[];

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

  //Get all the skills from the server and save into allSkills
  GetAllSkills() {
    //Clear out allSkills
    this.allSkills = [];

    //Call the server and get all skills
    this.http.get(this.apiUrl + "skill/index").subscribe(
      res => {
        let result = <any>res;
        this.allSkills = result;
      },
      error => console.log(error)
    );
  }
}
