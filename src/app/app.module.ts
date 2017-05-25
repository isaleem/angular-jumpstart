import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UserModule } from './modules/user/user.module';

import { AppRoutingModule, appRoutedComponents } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        UserModule
    ],
    declarations: [
        appRoutedComponents
    ],
    bootstrap: [ appRoutedComponents ]
})
export class AppModule { }