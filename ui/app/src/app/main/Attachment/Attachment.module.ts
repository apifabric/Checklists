import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ATTACHMENT_MODULE_DECLARATIONS, AttachmentRoutingModule} from  './Attachment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AttachmentRoutingModule
  ],
  declarations: ATTACHMENT_MODULE_DECLARATIONS,
  exports: ATTACHMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AttachmentModule { }