import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Collaboration-new',
  templateUrl: './Collaboration-new.component.html',
  styleUrls: ['./Collaboration-new.component.scss']
})
export class CollaborationNewComponent {
  @ViewChild("CollaborationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}