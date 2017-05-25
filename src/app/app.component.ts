import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <router-outlet>
        </router-outlet>
    `,
}) 
export class AppComponent implements OnInit {
    
    constructor() {
    }

    ngOnInit() {
    }
}