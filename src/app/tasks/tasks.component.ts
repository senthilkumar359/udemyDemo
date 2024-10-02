import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NewTaskData } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  constructor(private taskservice:TaskService){

  }
 
  get selectedUserTasks() {
   return this.taskservice.getuserTasks(this.userId);
    // return this.tasks.filter((task) => task.userId === this.userId);
  }
 
  addTask() {
    this.isAddingTask = true;
  }
  cancelTask() {
    this.isAddingTask = false;
  }
  onAddTask(NewTaskData: NewTaskData) {
   this.taskservice.addTask(NewTaskData,this.userId);
    this.isAddingTask=false;
  }
}
