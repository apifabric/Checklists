import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Collaboration-card.component.html',
  styleUrls: ['./Collaboration-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Collaboration-card]': 'true'
  }
})

export class CollaborationCardComponent {


}