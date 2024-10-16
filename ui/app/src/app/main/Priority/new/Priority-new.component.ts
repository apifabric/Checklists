import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Priority-new',
  templateUrl: './Priority-new.component.html',
  styleUrls: ['./Priority-new.component.scss']
})
export class PriorityNewComponent {
  @ViewChild("PriorityForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}