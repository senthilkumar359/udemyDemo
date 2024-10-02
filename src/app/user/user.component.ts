import { Component, computed, EventEmitter, input, Input, Output, output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Output() select=new EventEmitter<string>();

  @Input({required:true}) user!:User;

  @Input({required:true}) selected!:boolean;

  // @Input({ required: true }) avatar!: string;
  // @Input({required:true}) id!:string;
  // @Input({required:true}) name!:string;
  //signal calling angular 16
  // name = input.required<string>();


  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser=signal(DUMMY_USERS[randomIndex]);
  // imagepath=computed(()=>'assets/users/' + this.selectedUser().avatar)

  // getter
  get imagepath() {
    return 'assets/users/' + this.user.avatar;
  }

  onselectUSer() {
    this.select.emit(this.user.id);
    // changedetection
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
