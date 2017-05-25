import { NgModule } from '@angular/core';

import { UserRoutingModule, userRoutedComponents } from './user.routing';

@NgModule({
    imports: [UserRoutingModule],
    exports: [],
    declarations: [userRoutedComponents],
    providers: [],
})
export class UserModule { }