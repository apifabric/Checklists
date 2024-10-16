import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriorityHomeComponent } from './home/Priority-home.component';
import { PriorityNewComponent } from './new/Priority-new.component';
import { PriorityDetailComponent } from './detail/Priority-detail.component';

const routes: Routes = [
  {path: '', component: PriorityHomeComponent},
  { path: 'new', component: PriorityNewComponent },
  { path: ':id', component: PriorityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Priority-detail-permissions'
      }
    }
  },{
    path: ':priority_id/TaskPriority', loadChildren: () => import('../TaskPriority/TaskPriority.module').then(m => m.TaskPriorityModule),
    data: {
        oPermission: {
            permissionId: 'TaskPriority-detail-permissions'
        }
    }
}
];

export const PRIORITY_MODULE_DECLARATIONS = [
    PriorityHomeComponent,
    PriorityNewComponent,
    PriorityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriorityRoutingModule { }