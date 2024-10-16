import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TaskPriority-new',
  templateUrl: './TaskPriority-new.component.html',
  styleUrls: ['./TaskPriority-new.component.scss']
})
export class TaskPriorityNewComponent {
  @ViewChild("TaskPriorityForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}