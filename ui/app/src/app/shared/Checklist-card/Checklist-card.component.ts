import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Checklist-card.component.html',
  styleUrls: ['./Checklist-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Checklist-card]': 'true'
  }
})

export class ChecklistCardComponent {


}