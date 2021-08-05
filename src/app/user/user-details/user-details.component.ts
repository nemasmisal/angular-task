import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUserState } from 'src/app/+store/models/userState';
import { IUser } from 'src/app/core/models/user';
import { user } from '../../+store';
import { getUsers } from '../../+store/user/action';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<IUser | undefined> | undefined;
  constructor(private store: Store<IUserState>, private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.store.dispatch(getUsers())
    this.route.params.subscribe(params => {
      const { id } = params;
      this.user$ = this.store.select(user.userById, id)
    })
  }
}
