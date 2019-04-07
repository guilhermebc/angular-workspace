import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';
import { NgxHeaderModule, NgxHeaderComponent } from '@tools-component/ngx-header';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxHeaderModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [
    AppComponent,
    NgxHeaderComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    console.log(1);
    const headerElement = createCustomElement(NgxHeaderComponent, { injector: this.injector });
    const appElement = createCustomElement(AppComponent, { injector: this.injector });

    customElements.define('custom-header', headerElement);
    customElements.define('custom-app', appElement);
  }
}
