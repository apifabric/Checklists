import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TASKPRIORITY_MODULE_DECLARATIONS, TaskPriorityRoutingModule} from  './TaskPriority-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TaskPriorityRoutingModule
  ],
  declarations: TASKPRIORITY_MODULE_DECLARATIONS,
  exports: TASKPRIORITY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskPriorityModule { }