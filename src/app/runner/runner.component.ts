import { Component, OnInit } from '@angular/core';

//MODELS
import ( Runner } from '../models/runner';

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent implements OnInit {
  creatingNewRunner: boolean = false;
  newRunner: Runner;

  constructor() { }

  ngOnInit() {
  }
  
  //Sets if we are creating a new runner for the user
  SetNewRunner(state: boolean)
{
	this.creatingNewRunner = state;
	
	//If we are creating a new runner, initialize newRunner
	if(state == true)
	{
		this.newRunner = new Runner;
	}
}


}
