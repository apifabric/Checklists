import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborationHomeComponent } from './home/Collaboration-home.component';
import { CollaborationNewComponent } from './new/Collaboration-new.component';
import { CollaborationDetailComponent } from './detail/Collaboration-detail.component';

const routes: Routes = [
  {path: '', component: CollaborationHomeComponent},
  { path: 'new', component: CollaborationNewComponent },
  { path: ':id', component: CollaborationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Collaboration-detail-permissions'
      }
    }
  }
];

export const COLLABORATION_MODULE_DECLARATIONS = [
    CollaborationHomeComponent,
    CollaborationNewComponent,
    CollaborationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaborationRoutingModule { }