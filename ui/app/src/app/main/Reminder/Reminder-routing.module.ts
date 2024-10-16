import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReminderHomeComponent } from './home/Reminder-home.component';
import { ReminderNewComponent } from './new/Reminder-new.component';
import { ReminderDetailComponent } from './detail/Reminder-detail.component';

const routes: Routes = [
  {path: '', component: ReminderHomeComponent},
  { path: 'new', component: ReminderNewComponent },
  { path: ':id', component: ReminderDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Reminder-detail-permissions'
      }
    }
  }
];

export const REMINDER_MODULE_DECLARATIONS = [
    ReminderHomeComponent,
    ReminderNewComponent,
    ReminderDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReminderRoutingModule { }