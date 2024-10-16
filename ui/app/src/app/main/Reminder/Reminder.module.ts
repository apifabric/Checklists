import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {REMINDER_MODULE_DECLARATIONS, ReminderRoutingModule} from  './Reminder-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ReminderRoutingModule
  ],
  declarations: REMINDER_MODULE_DECLARATIONS,
  exports: REMINDER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReminderModule { }