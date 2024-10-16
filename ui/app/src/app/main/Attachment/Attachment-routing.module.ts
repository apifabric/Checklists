import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttachmentHomeComponent } from './home/Attachment-home.component';
import { AttachmentNewComponent } from './new/Attachment-new.component';
import { AttachmentDetailComponent } from './detail/Attachment-detail.component';

const routes: Routes = [
  {path: '', component: AttachmentHomeComponent},
  { path: 'new', component: AttachmentNewComponent },
  { path: ':id', component: AttachmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Attachment-detail-permissions'
      }
    }
  }
];

export const ATTACHMENT_MODULE_DECLARATIONS = [
    AttachmentHomeComponent,
    AttachmentNewComponent,
    AttachmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttachmentRoutingModule { }