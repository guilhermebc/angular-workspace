import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxHeaderModule } from '@tools-component/ngx-header';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
