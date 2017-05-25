import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'profile',
    template: `
        <h1>Welcome to your profile section</h1>
        <p><a routerLink="/user">Back to user home</a></p>
    `
})
export class ProfileComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}