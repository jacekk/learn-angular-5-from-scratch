import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  goals: string[] = [];

  btnText = 'Add an item';
  goalText = 'My first life goal';

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    const txt = String(this.goalText).trim();
    if (txt) {
      this.goals.push(this.goalText);
    }
    this.goalText = '';
    this.itemCount = this.goals.length;
  }
}
