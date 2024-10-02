import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData, Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() cancel=new EventEmitter<void>();
  @Output() addTask=new EventEmitter<NewTaskData>();
  entereedTitle='';
  enteredsummary='';
  //sample singnal input//

  entereddate=signal('');

  onCancel(){
    this.cancel.emit()
  }
  onSubmit(){
    this.addTask.emit({
      title:this.entereedTitle,summary:this.enteredsummary,date:this.entereddate()
    })
  }
}
