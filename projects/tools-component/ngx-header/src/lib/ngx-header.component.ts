import { Component, OnInit, Input } from '@angular/core';

export enum EnumOptions {
  ORANGE = 'text-orange',
  GREEN = 'text-green',
  RED = 'text-red'
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-header',
  templateUrl: './ngx-header.component.html',
  styleUrls: ['./ngx-header.component.scss']
})
export class NgxHeaderComponent implements OnInit {

  @Input() title: string;

  @Input() subtitle: string;

  @Input() theme: EnumOptions;

  constructor() { }

  ngOnInit() {
    if (!Object.values(EnumOptions).includes(this.theme)) {
      throw new Error('error theme!!');
    }
  }

  setTheme() {
    return {
      'text-orange': this.theme === EnumOptions.ORANGE,
      'text-green': this.theme === EnumOptions.GREEN,
      'text-red': this.theme === EnumOptions.RED
    };
  }

}
