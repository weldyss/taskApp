import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksSavePage } from './tasks-save.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TasksSavePage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [TasksSavePage]
})
export class TasksSavePageModule {}
