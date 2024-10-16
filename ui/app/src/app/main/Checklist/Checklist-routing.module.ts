import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistHomeComponent } from './home/Checklist-home.component';
import { ChecklistNewComponent } from './new/Checklist-new.component';
import { ChecklistDetailComponent } from './detail/Checklist-detail.component';

const routes: Routes = [
  {path: '', component: ChecklistHomeComponent},
  { path: 'new', component: ChecklistNewComponent },
  { path: ':id', component: ChecklistDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Checklist-detail-permissions'
      }
    }
  },{
    path: ':checklist_id/Collaboration', loadChildren: () => import('../Collaboration/Collaboration.module').then(m => m.CollaborationModule),
    data: {
        oPermission: {
            permissionId: 'Collaboration-detail-permissions'
        }
    }
},{
    path: ':checklist_id/Task', loadChildren: () => import('../Task/Task.module').then(m => m.TaskModule),
    data: {
        oPermission: {
            permissionId: 'Task-detail-permissions'
        }
    }
}
];

export const CHECKLIST_MODULE_DECLARATIONS = [
    ChecklistHomeComponent,
    ChecklistNewComponent,
    ChecklistDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecklistRoutingModule { }