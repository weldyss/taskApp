import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/tasks/models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
})
export class TasksListPage implements OnInit {

  tasks$: Observable<Task[]>;

  constructor() { }

  ngOnInit() {
    this.tasks$ = of([
      {id: 'dadasdaslkkhohkdfd', title: 'Aprender Ionic', done: false},
      {id: 'dsa334gfddasdasdad', title: 'Aprender Angular 4', done: true}
    ])
  }

}
