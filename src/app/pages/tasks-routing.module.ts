import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'create',
        loadChildren: './tasks/pages/tasks-save/tasks-save.module#TasksSavePageModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './tasks/pages/tasks-save/tasks-save.module#TasksSavePageModule'
      },
      {
        path: '',
        loadChildren: './tasks/pages/tasks-list/tasks-list.module#TasksListPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}
