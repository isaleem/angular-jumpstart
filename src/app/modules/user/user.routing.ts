import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { ProfileComponent } from './components/profile.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }

export const userRoutedComponents = [UserComponent, ProfileComponent];