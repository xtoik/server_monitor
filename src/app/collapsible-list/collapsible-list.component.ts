import { AfterContentInit, Component, ContentChild, forwardRef, Input } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

import { CollapsibleListItemComponent } from './collapsible-list-item.component';

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
export class CollapsibleListComponent implements AfterContentInit {
    @Input() expanded : boolean;
    level: number;
    @ContentChild(forwardRef(() => CollapsibleListItemComponent)) child: CollapsibleListItemComponent;

    ngAfterContentInit() {
      if (this.child != null) {
        console.log("setting the level " + (this.level + 1) + " to child list");
        this.child.level = this.level + 1;
      }
    }
}