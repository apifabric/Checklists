import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TaskTag-card.component.html',
  styleUrls: ['./TaskTag-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TaskTag-card]': 'true'
  }
})

export class TaskTagCardComponent {


}