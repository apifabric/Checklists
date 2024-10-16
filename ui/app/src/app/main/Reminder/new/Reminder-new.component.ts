import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Reminder-new',
  templateUrl: './Reminder-new.component.html',
  styleUrls: ['./Reminder-new.component.scss']
})
export class ReminderNewComponent {
  @ViewChild("ReminderForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}