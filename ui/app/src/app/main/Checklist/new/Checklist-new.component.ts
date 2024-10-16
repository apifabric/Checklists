import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Checklist-new',
  templateUrl: './Checklist-new.component.html',
  styleUrls: ['./Checklist-new.component.scss']
})
export class ChecklistNewComponent {
  @ViewChild("ChecklistForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}