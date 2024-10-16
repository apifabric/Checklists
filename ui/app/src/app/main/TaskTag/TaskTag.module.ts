import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TASKTAG_MODULE_DECLARATIONS, TaskTagRoutingModule} from  './TaskTag-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TaskTagRoutingModule
  ],
  declarations: TASKTAG_MODULE_DECLARATIONS,
  exports: TASKTAG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskTagModule { }