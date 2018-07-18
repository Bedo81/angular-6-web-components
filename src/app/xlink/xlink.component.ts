import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-xlink',
  template: `
    <p>
      child component xlink works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class XlinkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
