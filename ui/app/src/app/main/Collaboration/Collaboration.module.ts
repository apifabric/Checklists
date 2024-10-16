import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {COLLABORATION_MODULE_DECLARATIONS, CollaborationRoutingModule} from  './Collaboration-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CollaborationRoutingModule
  ],
  declarations: COLLABORATION_MODULE_DECLARATIONS,
  exports: COLLABORATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CollaborationModule { }