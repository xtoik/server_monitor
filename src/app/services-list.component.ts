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
    trigger('collapse', [
      state('in', style({height: '*', opacity: 1})),
      transition('* => void', [
        style({height: '*', opacity: 1}),
        animate('300ms ease-in', style({height: 0, opacity: 0}))
      ]),
      transition('void => *', [
        style({height: 0, opacity: 0}),
        animate('300ms ease-out', style({height: '*', opacity: 1}))
      ])      
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
