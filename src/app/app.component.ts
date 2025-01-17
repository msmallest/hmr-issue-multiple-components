import { Component } from '@angular/core';
import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { CComponent } from './c.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-a />
    <app-b />
    <app-c />
  `,
  styleUrl: './app.component.scss',
  imports: [AComponent, BComponent, CComponent],
})
export class AppComponent {
  title = 'hmr-issue-multiple-components';
}
