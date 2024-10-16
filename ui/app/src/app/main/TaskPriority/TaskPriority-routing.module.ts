import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPriorityHomeComponent } from './home/TaskPriority-home.component';
import { TaskPriorityNewComponent } from './new/TaskPriority-new.component';
import { TaskPriorityDetailComponent } from './detail/TaskPriority-detail.component';

const routes: Routes = [
  {path: '', component: TaskPriorityHomeComponent},
  { path: 'new', component: TaskPriorityNewComponent },
  { path: ':id', component: TaskPriorityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TaskPriority-detail-permissions'
      }
    }
  }
];

export const TASKPRIORITY_MODULE_DECLARATIONS = [
    TaskPriorityHomeComponent,
    TaskPriorityNewComponent,
    TaskPriorityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskPriorityRoutingModule { }