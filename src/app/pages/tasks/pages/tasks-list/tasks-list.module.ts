import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksListPage } from './tasks-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/pages/tasks/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: TasksListPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TasksListPage]
})
export class TasksListPageModule {}
