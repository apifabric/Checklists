import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskHomeComponent } from './home/Task-home.component';
import { TaskNewComponent } from './new/Task-new.component';
import { TaskDetailComponent } from './detail/Task-detail.component';

const routes: Routes = [
  {path: '', component: TaskHomeComponent},
  { path: 'new', component: TaskNewComponent },
  { path: ':id', component: TaskDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Task-detail-permissions'
      }
    }
  },{
    path: ':task_id/Attachment', loadChildren: () => import('../Attachment/Attachment.module').then(m => m.AttachmentModule),
    data: {
        oPermission: {
            permissionId: 'Attachment-detail-permissions'
        }
    }
},{
    path: ':task_id/Comment', loadChildren: () => import('../Comment/Comment.module').then(m => m.CommentModule),
    data: {
        oPermission: {
            permissionId: 'Comment-detail-permissions'
        }
    }
},{
    path: ':task_id/Reminder', loadChildren: () => import('../Reminder/Reminder.module').then(m => m.ReminderModule),
    data: {
        oPermission: {
            permissionId: 'Reminder-detail-permissions'
        }
    }
},{
    path: ':task_id/TaskPriority', loadChildren: () => import('../TaskPriority/TaskPriority.module').then(m => m.TaskPriorityModule),
    data: {
        oPermission: {
            permissionId: 'TaskPriority-detail-permissions'
        }
    }
},{
    path: ':task_id/TaskTag', loadChildren: () => import('../TaskTag/TaskTag.module').then(m => m.TaskTagModule),
    data: {
        oPermission: {
            permissionId: 'TaskTag-detail-permissions'
        }
    }
}
];

export const TASK_MODULE_DECLARATIONS = [
    TaskHomeComponent,
    TaskNewComponent,
    TaskDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }