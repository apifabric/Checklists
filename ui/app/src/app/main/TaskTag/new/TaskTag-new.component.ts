import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TaskTag-new',
  templateUrl: './TaskTag-new.component.html',
  styleUrls: ['./TaskTag-new.component.scss']
})
export class TaskTagNewComponent {
  @ViewChild("TaskTagForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}