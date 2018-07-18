import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-other',
  template: `
    <p>
      child component works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
