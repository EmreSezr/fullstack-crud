import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input() user? : User;
  @Output() usersUpdated = new EventEmitter<User[]>();

  constructor(private UserService : UserService){}

  ngOnInit(): void {
      
  }

  updateUser(user:User){
    this.UserService
    .updateUser(user)
    .subscribe((users : User[])=> this.usersUpdated.emit(users))
  }

  deleteUser(user:User){
    this.UserService
    .deleteUser(user)
    .subscribe((users : User[])=> this.usersUpdated.emit(users))
  }

  createUser(user:User){
    this.UserService
    .createUser(user)
    .subscribe((users : User[])=> this.usersUpdated.emit(users))
  }

}
