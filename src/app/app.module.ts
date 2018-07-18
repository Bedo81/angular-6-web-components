import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { XlinkComponent } from './xlink/xlink.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [AppComponent, XlinkComponent, OtherComponent],
  imports: [BrowserModule, AppRoutingModule],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customApp = createCustomElement(AppComponent, { injector });
    customElements.define('custom-app', customApp);
  }

  ngDoBootstrap() {}
}
