import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	itemCount: number = 4;
	goalText: string = "First Goal";
	goals = [];

  constructor() { }

  ngOnInit() {
  	this.itemCount = this.goals.length;
  }

  addItem() {
  	this.goals.push(this.goalText);
  	this.goalText = '';
  	this.itemCount = this.goals.length;
  }

}
