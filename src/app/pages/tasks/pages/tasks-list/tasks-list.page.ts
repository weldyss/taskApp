import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/pages/tasks/models/task.model';
import { TasksService } from 'src/app/pages/tasks/services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss']
})
export class TasksListPage implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks$ = this.tasksService.getAll();
  }
}
