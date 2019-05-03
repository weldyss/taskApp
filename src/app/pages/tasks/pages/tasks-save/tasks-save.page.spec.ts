import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSavePage } from './tasks-save.page';

describe('TaskSavePage', () => {
  let component: TasksSavePage;
  let fixture: ComponentFixture<TasksSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TasksSavePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
