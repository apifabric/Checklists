import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagHomeComponent } from './home/Tag-home.component';
import { TagNewComponent } from './new/Tag-new.component';
import { TagDetailComponent } from './detail/Tag-detail.component';

const routes: Routes = [
  {path: '', component: TagHomeComponent},
  { path: 'new', component: TagNewComponent },
  { path: ':id', component: TagDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Tag-detail-permissions'
      }
    }
  },{
    path: ':tag_id/TaskTag', loadChildren: () => import('../TaskTag/TaskTag.module').then(m => m.TaskTagModule),
    data: {
        oPermission: {
            permissionId: 'TaskTag-detail-permissions'
        }
    }
}
];

export const TAG_MODULE_DECLARATIONS = [
    TagHomeComponent,
    TagNewComponent,
    TagDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagRoutingModule { }