import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PRIORITY_MODULE_DECLARATIONS, PriorityRoutingModule} from  './Priority-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PriorityRoutingModule
  ],
  declarations: PRIORITY_MODULE_DECLARATIONS,
  exports: PRIORITY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PriorityModule { }