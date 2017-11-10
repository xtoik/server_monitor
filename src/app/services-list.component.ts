import { Component } from '@angular/core';
import { Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

import { Service } from './dtos/service';
import { ServiceComponent } from './service.component';

@Component({
  selector: 'services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
  animations: [
    trigger('expand', [
      state('true', style({height: '*'})),
      transition('true => false', [
        style({height: '*'}),
        animate(1000, style({height: 0}))
      ]),
      transition('false => true', [
        style({height: 0}),
        animate(1000, style({height: '*'}))
      ]),
    ])
  ]
})
export class ServicesListComponent {
  @Input() services : Service[]; 
  @Input() expanded : boolean = false;
  @Input() level: number;
  
  isChild() {
    return this.level > 0;
  }
}