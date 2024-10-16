import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Attachment-new',
  templateUrl: './Attachment-new.component.html',
  styleUrls: ['./Attachment-new.component.scss']
})
export class AttachmentNewComponent {
  @ViewChild("AttachmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}