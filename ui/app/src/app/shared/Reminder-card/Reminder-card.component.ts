import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Reminder-card.component.html',
  styleUrls: ['./Reminder-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Reminder-card]': 'true'
  }
})

export class ReminderCardComponent {


}