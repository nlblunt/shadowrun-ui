import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  newRunner = false;  //Creating a new runner (user)?
  signed_in = false;  //Is the user already signed in?
  login: any = {};
  error: string;

    //Initialize Angular2TokenService
  
  constructor(private _tokenService: Angular2TokenService)
  {
  	this._tokenService.init({
  		apiBase: "http://shadowrun-api.herokuapp.com",
  		signInRedirect: "/"
  		});
  }

  ShowNewRunner(show: boolean)
  {
this.newRunner = show;
}

  runnerSignIn()
  {
    //Sign in
        this._tokenService.signIn({email: this.login.email, password: this.login.password}).subscribe
        (
          res => this.signed_in = true,
          error => this.error = "Error Logging in.  Please try again."
        )
  }

  runnerRegister()
  {
	if(this.login.password != this.login.password_confirm)
	{
		this.error = “Passwords do not match”;
		return;
	}

    
    this._tokenService.registerAccount({
      email: this.login.email,
      password: this.login.password,
      passwordConfirmation: this.login.password
    })
    .subscribe
    (
      res => this.signed_in = true,
      error => this.error = "Error registering new account."
    )
  }
  }
}
