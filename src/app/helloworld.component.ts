import { Component } from '@angular/core';

@Component({
    selector: 'hello-world-app',
    template: `<h1>Hello {{name}}</h1>`,
})
export class HelloWorldComponent  { name = 'World'; }