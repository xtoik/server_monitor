import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';
import { Collapsible } from './collapsible.interface'
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
export class CollapsibleListComponent extends Collapsible implements AfterContentInit {
    _level: number = 0;
    @Input() expanded : boolean;
    @ContentChildren(CollapsibleListItemComponent) children: QueryList<CollapsibleListItemComponent>;

    get level(): number {
      return this._level;        
    }

    @Input()
    set level(value: number) {
      this._level = value;
      if (this.children != null) {
        this.children.forEach(child => {
          child.level = this._level + 1;
          console.log("setting the level " + (this._level + 1) + " to children");
        });
      }
    }    

    ngAfterContentInit() {
      this.level = this._level;
    }

    isChild(): boolean {
      return this.level > 0
    }
}