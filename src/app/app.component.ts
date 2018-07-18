import {
  Input,
  Component,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'custom-app',
  template: `
  <button (click)="handleClick()">{{label}}</button>
  <custom-other></custom-other>
  <h3 class="title">Menu</h3>
    <nav>
      <a (click)="routeClick('xlink')">Xlink</a> &nbsp;
      <a (click)="routeClick('other')">Other</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: #bada55;
      font-size: 20px;
    }
  `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  @Output() menuitem = new EventEmitter<number>();
  private clicksCt = 0;

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }
  routeClick(menuitem: any) {
    this.menuitem.emit(menuitem);
  }
}
