import { Component, Input } from '@angular/core';

@Component({
    selector: 'about',
    template: `
        <h1>{{ title }}</h1>
        <input type="text" [(ngModel)]="title"/>
    `
})
export class AboutComponent {
    @Input()
    title: String = 'About';
}