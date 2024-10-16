import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/Collaboration', loadChildren: () => import('../Collaboration/Collaboration.module').then(m => m.CollaborationModule),
    data: {
        oPermission: {
            permissionId: 'Collaboration-detail-permissions'
        }
    }
},{
    path: ':user_id/Comment', loadChildren: () => import('../Comment/Comment.module').then(m => m.CommentModule),
    data: {
        oPermission: {
            permissionId: 'Comment-detail-permissions'
        }
    }
},{
    path: ':user_id/Notification', loadChildren: () => import('../Notification/Notification.module').then(m => m.NotificationModule),
    data: {
        oPermission: {
            permissionId: 'Notification-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }