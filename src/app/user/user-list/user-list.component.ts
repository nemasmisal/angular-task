import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/user';
import { user } from '../../+store'
import { getUsers } from '../../+store/user/action'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<IUser[]>;
  constructor(private store: Store) {
    this.users$ = store.select(user.all)
  }

  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }

}
