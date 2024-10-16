import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CHECKLIST_MODULE_DECLARATIONS, ChecklistRoutingModule} from  './Checklist-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ChecklistRoutingModule
  ],
  declarations: CHECKLIST_MODULE_DECLARATIONS,
  exports: CHECKLIST_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChecklistModule { }