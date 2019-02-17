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
  userSignedIn: boolean = false;

	//DATA STORAGE
	allMetatypes: Metatype[];

  constructor(
    public _tokenService: AngularTokenService,
	private http: HttpClient,
    private router: Router
  ) {
   
  }

	GetAllMetatypes()
	{
		this.http.get('metatype/index').subscribe(
			res => {
				this.allMetatypes = res.json() as Metatype[];
				console.log(this.allMetatypes);
				console.log(res);
			},
				error => console.log(error)	
			)
	}	
}
