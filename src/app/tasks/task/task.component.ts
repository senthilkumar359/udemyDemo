import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) task!:Task;
// @Output() complete=new EventEmitter<string>();

constructor(private taskservice:TaskService){}
completed(){
  // console.log("test");
  // this.complete.emit(this.task.id);
this.taskservice.removeTask(this.task.id);
}
}
