import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTagHomeComponent } from './home/TaskTag-home.component';
import { TaskTagNewComponent } from './new/TaskTag-new.component';
import { TaskTagDetailComponent } from './detail/TaskTag-detail.component';

const routes: Routes = [
  {path: '', component: TaskTagHomeComponent},
  { path: 'new', component: TaskTagNewComponent },
  { path: ':id', component: TaskTagDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TaskTag-detail-permissions'
      }
    }
  }
];

export const TASKTAG_MODULE_DECLARATIONS = [
    TaskTagHomeComponent,
    TaskTagNewComponent,
    TaskTagDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskTagRoutingModule { }