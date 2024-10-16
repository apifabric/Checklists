import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Attachment', loadChildren: () => import('./Attachment/Attachment.module').then(m => m.AttachmentModule) },
    
        { path: 'Checklist', loadChildren: () => import('./Checklist/Checklist.module').then(m => m.ChecklistModule) },
    
        { path: 'Collaboration', loadChildren: () => import('./Collaboration/Collaboration.module').then(m => m.CollaborationModule) },
    
        { path: 'Comment', loadChildren: () => import('./Comment/Comment.module').then(m => m.CommentModule) },
    
        { path: 'Notification', loadChildren: () => import('./Notification/Notification.module').then(m => m.NotificationModule) },
    
        { path: 'Priority', loadChildren: () => import('./Priority/Priority.module').then(m => m.PriorityModule) },
    
        { path: 'Reminder', loadChildren: () => import('./Reminder/Reminder.module').then(m => m.ReminderModule) },
    
        { path: 'Tag', loadChildren: () => import('./Tag/Tag.module').then(m => m.TagModule) },
    
        { path: 'Task', loadChildren: () => import('./Task/Task.module').then(m => m.TaskModule) },
    
        { path: 'TaskPriority', loadChildren: () => import('./TaskPriority/TaskPriority.module').then(m => m.TaskPriorityModule) },
    
        { path: 'TaskTag', loadChildren: () => import('./TaskTag/TaskTag.module').then(m => m.TaskTagModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }