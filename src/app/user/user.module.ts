import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '../+store/user/effects';
import * as userReducer from '../+store/user/reducer'

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(userReducer.featureKey, userReducer.reducer),
    EffectsModule.forFeature([UsersEffects]),
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
