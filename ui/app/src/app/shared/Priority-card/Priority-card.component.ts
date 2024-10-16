import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Priority-card.component.html',
  styleUrls: ['./Priority-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Priority-card]': 'true'
  }
})

export class PriorityCardComponent {


}