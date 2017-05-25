import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user',
    template: `
        <p>This is user homepage<p>
        <p><a routerLink="/profile">Go to profile</a></p>
    `
})
export class UserComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}