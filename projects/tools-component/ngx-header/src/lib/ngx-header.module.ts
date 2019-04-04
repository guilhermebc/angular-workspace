import { NgModule } from '@angular/core';
import { NgxHeaderComponent } from './ngx-header.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgxHeaderComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgxHeaderComponent]
})
export class NgxHeaderModule { }
