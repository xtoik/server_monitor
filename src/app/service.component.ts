import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Service } from './dtos/service';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: [ './service.component.css' ],
  animations: [
    trigger('serviceStatusOk', [
      state('false', style({
        color: '#ee0000'
      })),
      state('true', style({
        color: 'inherit'
      })),
      transition('isOk => isNotOk', animate('100ms ease-in')),
      transition('isNotOk => isOk', animate('100ms ease-out'))
    ])
  ]
})
export class ServiceComponent {
  @Input() service: Service;
  @Input() level: number;

  expanded: boolean = false;  

  toogleExpanded(): void {
    this.expanded = !this.expanded;    
  }
}