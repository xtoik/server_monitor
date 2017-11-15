import { Component, Input } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
    selector: 'collist',
    templateUrl: 'collapsible-list.component.html',
    styleUrls: [ 'collapsible-list.component.css' ],
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
export class CollapsibleListComponent {
    @Input() expanded : boolean;
    @Input() list : object[];
    @Input() level: number = 0;
}