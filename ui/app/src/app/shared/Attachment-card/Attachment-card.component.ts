import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Attachment-card.component.html',
  styleUrls: ['./Attachment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Attachment-card]': 'true'
  }
})

export class AttachmentCardComponent {


}