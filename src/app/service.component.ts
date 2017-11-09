import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

import { Service } from './dtos/service';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: [ './service.component.css' ],
  animations: [
    trigger('serviceStatusOk', [
      state('false',  style({
        color: '#ff0000'
      })),
      state('true', style({
        color: 'inherit'
      })),
      transition('true => false', 
          animate('1s ease-out', keyframes([
            style({ color: '#330000' }),
            style({ color: '#660000' }),
            style({ color: '#990000' }),
            style({ color: '#cc0000' }),
            style({ color: '#ff0000' })
          ]))),
      transition('false => true', 
          animate('1s ease-out', keyframes([
            style({ color: '#cc0000' }),
            style({ color: '#990000' }),
            style({ color: '#660000' }),
            style({ color: '#330000' }),
            style({ color: '#000000' })
          ])))
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