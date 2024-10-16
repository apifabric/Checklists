import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TaskPriority-card.component.html',
  styleUrls: ['./TaskPriority-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TaskPriority-card]': 'true'
  }
})

export class TaskPriorityCardComponent {


}