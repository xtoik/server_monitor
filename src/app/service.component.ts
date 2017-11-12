import { Component, Input, DoCheck } from '@angular/core';
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
      state('notOk',  style({
        color: '#ff0000'
      })),
      state('ok', style({
        color: '#000000'
      })),
      state('childrenNotOk',  style({
        color: '#ffcc00'
      })),
      transition('ok => notOk', 
          animate('1s ease-out', keyframes([
            style({ color: '#330000' }),
            style({ color: '#660000' }),
            style({ color: '#990000' }),
            style({ color: '#cc0000' }),
            style({ color: '#ff0000' })
          ]))),
      transition('notOk => ok', 
          animate('1s ease-out', keyframes([
            style({ color: '#cc0000' }),
            style({ color: '#990000' }),
            style({ color: '#660000' }),
            style({ color: '#330000' }),
            style({ color: '#000000' })
          ]))),
      transition('ok => childrenNotOk', 
          animate('1s ease-out', keyframes([
            style({ color: '#332600' }),
            style({ color: '#665200' }),
            style({ color: '#997800' }),
            style({ color: '#cca400' }),
            style({ color: '#ffcc00' })
          ]))),
      transition('childrenNotOk => ok', 
          animate('1s ease-out', keyframes([
            style({ color: '#cca400' }),
            style({ color: '#997800' }),
            style({ color: '#665200' }),
            style({ color: '#332600' }),
            style({ color: '#000000' })
          ])))
    ])
  ]  
})
export class ServiceComponent implements DoCheck {
  @Input() service: Service;
  @Input() level: number;

  expanded: boolean = false;
  toogledByUser: boolean = false;

  ngDoCheck() {
    if (!this.toogledByUser) {
      if (!this.expanded && !this.areChildrenOk(this.service)) {
        this.expanded = true;
      } else if (this.expanded && this.areChildrenOk(this.service)) {
        this.expanded = false;
      }
    }
  }

  toogleExpanded(): void {
    this.expanded = !this.expanded;
    this.toogledByUser = true; 
  }

  areChildrenOk(svc: Service): boolean {
    for (let childService of svc.services){
        if (!childService.isOk || !this.areChildrenOk(childService)){
            return false;
        }
    } 

    return true;
  }
  
  getServiceStatus(): string {
    let ret: string;
    if (this.service.isOk) {
      if (this.areChildrenOk(this.service)) {
        ret = 'ok';
      } else {
        ret = 'childrenNotOk';
      }
    } else {
      ret = 'notOk';
    }

    return ret;
  }
}