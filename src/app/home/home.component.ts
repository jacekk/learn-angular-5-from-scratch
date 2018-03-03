import {Component, OnInit} from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
        ]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
          ]))
        ]), { optional: true })
      ])
    ])
  ],
})
export class HomeComponent implements OnInit {

  itemCount: number;
  goals: string[] = [
    'My first life goal',
  ];

  btnText = 'Add an item';
  goalText = '';

  constructor() {}

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    const txt = String(this.goalText).trim();
    if (!txt) {
      return;
    }
    this
      .goals
      .push(txt);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

  removeItem(index) {
    console.log('remove', index);
    this.goals.splice(index, 1);
    this.itemCount = this.goals.length;
  }
}
