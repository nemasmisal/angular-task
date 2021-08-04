import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: 'details/:id',
        component: UserDetailsComponent
      }
    ])
  ]
})
export class UserModule { }
